"use client";

import geojson from "./chapters.json";
import Head from "next/head";
import mapboxgl from "mapbox-gl";
import React, { useEffect, useState } from "react";
import YOIFooter from "@/components/footer";
import YOINav from "@/components/navigation/navigation";
import { useMediaQuery } from "react-responsive";
import "./mapbox.css";
import InstagramSVG from "./instagram.svg";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

type Feature = {
  type: "Feature";
  geometry: {
    type:
      | "Point"
      | "LineString"
      | "Polygon"
      | "MultiPoint"
      | "MultiLineString"
      | "MultiPolygon";
    coordinates: [number, number];
  };
  properties: {
    title: string;
    description: string;
    instagram: string;
    "marker-color": string;
  };
};

export default function Home() {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  /* get size of the device (mobile or desktop) */
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const zoom = isTabletOrMobile ? 2.25 : 4;

  useEffect(() => {
    setPageIsMounted(true);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://api.mapbox.com/mapbox-gl-js/v3.5.1/mapbox-gl.css";
    document.head.appendChild(link);

    mapboxgl.accessToken =
      process.env.MAPBOX_ACCESS_TOKEN ||
      "pk.eyJ1IjoiaXNzYWNsMTQiLCJhIjoiY2x5bDlteXEzMWFxazJpcG55N2E5eGt5ZiJ9.ni0ledudRQEsUtuvG_f3zA";

    const map = new mapboxgl.Map({
      accessToken: mapboxgl.accessToken,
      container: "map-container",
      center: [-95.712891, 40.09024],
      zoom: zoom,
      style: "mapbox://styles/mapbox/dark-v11",
      config: {
        basemap: {
          lightPreset: "night",
        },
      },
    });

    geojson.features.map((feature) => {
      const [lng, lat] = feature.geometry.coordinates;
      new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
      new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 40, className: "custom-popup" }) // add popups
            .setHTML(
              `<h3>${feature.properties.title}</h3>
          <p>${feature.properties.description}</p>
          <a
            href="https://instagram.com/${feature.properties.instagram}"
            target="_blank"
            rel="noreferrer"
            class="flex gap-1 items-center"
          >
            <img src="/instagram.svg" alt="Instagram" class="w-5 h-5" />
            <div>@${feature.properties.instagram}</div>
          </a>
          `,
            ),
        )
        .addTo(map);
    });

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    return () => {
      document.head.removeChild(link);
      map.remove();
    };
  }, [zoom]);
  return (
    <>
      <Head>
        <script
          async
          src="https://api.mapbox.com/mapbox-gl-js/v3.5.1/mapbox-gl.js"
        />
      </Head>
      <div className="flex min-h-screen w-screen flex-col items-center justify-between bg-yoi-white dark:bg-yoi-black">
        <YOINav />
        <main className="z-1 flex flex-col">
          <section className="h-screen w-screen pb-12 md:pb-24 lg:pb-32">
            <div id="map-container" className="h-screen" />
          </section>
          <div className="z-2 bg-radial-ellipse-tl absolute from-yoi-blue-4 from-25% to-transparent pl-6 pr-6 pt-20 dark:from-yoi-blue-1 sm:pt-28">
            <h1 className="fancy text-4xl sm:text-5xl md:text-6xl lg:text-7xl/none">
              Find A Chapter
            </h1>
            <p className="max-w-[600px] pt-4 text-gray-800 dark:text-gray-400 md:text-xl">
              Use our interactive map to find a YOI chapter near you. If you
              don&apos;t see one near you, consider starting one!
            </p>
          </div>
        </main>
        <YOIFooter />
      </div>
    </>
  );
}
