import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";

import styles from "./Logo.module.scss";
import { LogoProps } from "./LogoProps";

const Logo: FC<LogoProps> = ({ onClick }) => {
  return (
    <Link className={styles["logo"]} to="/" onClick={onClick}>
      <img src={logo} alt="Данила Государев Логотип" />
    </Link>
  );
};

export default Logo;
