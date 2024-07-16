"use client";

import React, { useEffect, useState } from "react";
import YOIFooter from "@/components/footer";
import YOINav from "@/components/navigation/navigation";
import Banner from "@/components/banners/banner";
import mapboxgl from "mapbox-gl";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";
import geojson from "./chapters.json";

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

    for (const feature of geojson.features) {
      // create a HTML element for each feature
      const el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundImage = "url('https://docs.mapbox.com/help/demos/custom-markers-gl-js/mapbox-icon.png')";
      el.style.color = feature.properties["marker-color"];
      el.style.backgroundSize = "cover";
      el.style.width = "50px";
      el.style.height = "50px";
      el.style.borderRadius = "50%";
      el.style.cursor = "pointer";

      // make a marker for each feature and add to the map
      const [lng, lat] = feature.geometry.coordinates;
      new mapboxgl.Marker(el)
        .setLngLat([lng, lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25, className: 'custom-popup' }) // add popups
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`,
        ),
        )
        .addTo(map);
    }

    return () => {
      document.head.removeChild(link);
    };
  }, [zoom]);
  return (
    <>
      <Head>
        <script async src="https://api.mapbox.com/mapbox-gl-js/v3.5.1/mapbox-gl.js" />
        <style jsx>{`
          body {
            margin: 0;
            padding: 0;
          }

          .marker {
            background-image: url('https://docs.mapbox.com/help/demos/custom-markers-gl-js/mapbox-icon.png');
            background-size: cover;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
          }

          .mapboxgl-popup {
            max-width: 200px;
          }

          .mapboxgl-popup-content {
            text-align: center;
            font-family: "Open Sans", sans-serif;
            background: red;
          }
        `}</style>
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
