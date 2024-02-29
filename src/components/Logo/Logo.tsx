import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";

import styles from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <Link className={styles["logo"]} to="/">
      <img src={logo} alt="Данила Государев Логотип" />
    </Link>
  );
};

export default Logo;
