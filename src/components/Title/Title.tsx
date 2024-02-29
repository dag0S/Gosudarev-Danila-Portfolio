import { FC } from "react";
import { TitleProps } from "./TitleProps";
import cn from "classnames";

import styles from "./Title.module.scss";

const Title: FC<TitleProps> = ({ children, className }) => {
  return (
    <h2
      className={cn(styles["title"], {
        [className]: className,
      })}
    >
      {children}
    </h2>
  );
};

export default Title;
