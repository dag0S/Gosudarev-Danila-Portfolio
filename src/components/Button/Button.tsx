import { FC } from "react";
import { Link } from "react-router-dom";
import { ButtonProps } from "./ButtonProps";

import styles from "./Button.module.scss";

const Button: FC<ButtonProps> = ({ children, path }) => {
  return (
    <Link to={path} className={styles["btn"]}>
      {children}
    </Link>
  );
};

export default Button;
