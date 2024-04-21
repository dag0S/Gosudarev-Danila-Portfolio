import { FC, HTMLProps, forwardRef } from "react";
import { TitleProps } from "./TitleProps";
import cn from "classnames";
import { motion } from "framer-motion";

import styles from "./Title.module.scss";

const Title: FC<TitleProps> = forwardRef<
  HTMLHeadingElement,
  HTMLProps<HTMLHeadingElement>
>(({ children, className = "" }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn(styles["title"], {
        [className]: className,
      })}
    >
      {children}
    </h2>
  );
});

export const MTitle = motion(Title);
export default Title;
