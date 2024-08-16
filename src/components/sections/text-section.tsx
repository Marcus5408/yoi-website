import LeftText from "./left-text";
import RightText from "./right-text";
import React from "react";

type TextSectionProps = {
  side?: string;
  toast?: string | null;
  title?: string;
  description?: string;
  link?: string;
  buttonText?: string;
  image?: string;
  className?: string;
};

const TextSection: React.FC<TextSectionProps> = ({
  side,
  toast = null,
  title,
  description,
  link,
  buttonText,
  image,
  className,
}) => {
  if (side === "right") {
    return (
      <RightText
        toast={toast}
        title={title}
        description={description}
        link={link}
        buttonText={buttonText}
        image={image}
        className={className}
      />
    );
  } else {
    return (
      <LeftText
        toast={toast}
        title={title}
        description={description}
        link={link}
        buttonText={buttonText}
        image={image}
        className={className}
      />
    );
  }
};

export default TextSection;
