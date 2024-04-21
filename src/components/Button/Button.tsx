import { FC, forwardRef } from "react";
import { Link } from "react-router-dom";
import { ButtonProps } from "./ButtonProps";
import cn from "classnames";

import styles from "./Button.module.scss";
import { motion } from "framer-motion";

const Button: FC<ButtonProps> = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className = "", children, path }, ref) => {
    return (
      <Link
        className={cn(styles["btn"], {
          [className]: className,
        })}
        to={path}
        ref={ref}
      >
        {children}
      </Link>
    );
  }
);

export const MButton = motion(Button);
export default Button;
