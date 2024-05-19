import LeftText from "./left-text";
import RightText from "./right-text";

type TextSectionProps = {
  image?: string;
  title?: string;
  description?: string;
  link?: string;
  side?: string;
  className?: string;
};

const TextSection: React.FC<TextSectionProps> = ({
  image,
  title,
  description,
  link,
  side,
  className,
}) => {
  if (side === "right") {
    return (
      <RightText
        image={image}
        title={title}
        description={description}
        link={link}
        className={className}
      />
    );
  } else {
    return (
      <LeftText
        image={image}
        title={title}
        description={description}
        link={link}
        className={className}
      />
    );
  }
};

export default TextSection;
