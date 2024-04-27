import { FC, forwardRef, useEffect, useState } from "react";
import { ProgressiveImageProps } from "./ProgressiveImageProps";
import { motion } from "framer-motion";

import styles from "./ProgressiveImage.module.scss";

const ProgressiveImage: FC<ProgressiveImageProps> = forwardRef<
  HTMLImageElement,
  ProgressiveImageProps
>(({ src, placeholderSrc, alt = "", className = "" }, ref) => {
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

  return (
    <img ref={ref} loading="lazy" className={cn} src={imageSrc} alt={alt} />
  );
});

export const MProgressiveImage = motion(ProgressiveImage);
export default ProgressiveImage;
