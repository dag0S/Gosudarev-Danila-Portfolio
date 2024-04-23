import { FC, useEffect, useState } from "react";
import { ProgressiveImageProps } from "./ProgressiveImageProps";

import styles from "./ProgressiveImage.module.scss";

const ProgressiveImage: FC<ProgressiveImageProps> = ({
  src,
  placeholderSrc,
  alt = "",
  className = "",
}) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc);

  const cn = `${className} ${
    imageSrc === placeholderSrc ? styles["loading"] : styles["loaded"]
  }`;

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return <img className={cn} src={imageSrc} alt={alt} />;
};

export default ProgressiveImage;
