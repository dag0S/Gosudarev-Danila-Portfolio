import { FC } from "react";
import { Link } from "react-router-dom";
import { ButtonProps } from "./ButtonProps";
import cn from "classnames";

import styles from "./Button.module.scss";

const Button: FC<ButtonProps> = ({ className = "", children, path = "" }) => {
  return (
    <Link
      to={path}
      className={cn(styles["btn"], {
        [className]: className,
      })}
    >
      {children}
    </Link>
  );
};

export default Button;
