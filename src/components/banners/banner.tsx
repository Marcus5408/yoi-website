import { useMediaQuery } from "react-responsive";
import BannerDesktop from "./banner-desktop";
import BannerMobile from "./banner-mobile";
import React from "react";

type BannerProps = {
  bg?: string;
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
};

const Banner: React.FC<BannerProps> = ({ bg, size, children }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  if (isTabletOrMobile) {
    return <BannerMobile bg={bg ?? ""}>{children}</BannerMobile>;
  } else {
    return (
      <BannerDesktop bg={bg ?? ""} size={size ?? "large"}>
        {children}
      </BannerDesktop>
    );
  }
};

export default Banner;
