"use client";

import React, { useEffect, useState } from "react";
import YOIFooter from "@/components/footer";
import YOINav from "@/components/navigation/navigation";
import Banner from "@/components/banners/banner";
import mapboxgl from "mapbox-gl";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";

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
    return () => {
      document.head.removeChild(link);
    };
  }, [zoom]);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/v3.5.1/mapbox-gl.css"
        />
      </Head>
      <div className="flex min-h-screen w-screen flex-col items-center justify-between bg-yoi-white dark:bg-yoi-black">
        <YOINav />
        <main className="z-1 flex flex-col">
          <section className="h-screen w-screen pb-12 md:pb-24 lg:pb-32">
            <div id="map-container" className="h-screen pt-96" />
          </section>
          <div className="z-2 bg-radial-ellipse-tl absolute from-yoi-blue-4 from-25% to-transparent pl-6 pr-6 pt-20 dark:from-yoi-blue-1 sm:pt-28">
            <h1 className="fancy text-4xl sm:text-5xl md:text-6xl lg:text-7xl/none">
              Find A Location
            </h1>
            <p className="max-w-[600px] text-gray-800 dark:text-gray-400 md:text-xl">
              Use our interactive map to find a location near you. If you
              don&apos;t see a location near you, consider starting one!
            </p>
          </div>
        </main>
        <YOIFooter />
      </div>
    </>
  );
}
