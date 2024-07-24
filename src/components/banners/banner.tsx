import { useEffect, useState } from "react";
import BannerDesktop from "./banner-desktop";
import BannerMobile from "./banner-mobile";
import React from "react";

type BannerProps = {
  title: any;
  description: string;
  bg: string;
  size?: "small" | "medium" | "large";
  buttonName?: string;
  buttonLink?: string;
};

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  bg,
  size,
  buttonName,
  buttonLink,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let button = null;
  if (buttonName !== undefined && buttonLink !== undefined) {
    button = {
      text: buttonName,
      link: buttonLink,
    };
  }

  if (isMobile) {
    return (
      <BannerMobile
        bg={bg ?? ""}
        title={title}
        description={description}
        button={button}
      />
    );
  } else {
    return (
      <BannerDesktop
        bg={bg ?? ""}
        size={size ?? "large"}
        title={title}
        description={description}
        button={button}
      />
    );
  }
};

export default Banner;
