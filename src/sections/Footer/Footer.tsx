import { FC } from "react";
import Logo from "../../components/Logo/Logo";
import Menu from "../../components/Menu/Menu";

import styles from "./Footer.module.scss";
import Socials from "../../components/Socials/Socials";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className={styles["footer"]}>
      <div className="container">
        <div className={styles["footer__inner"]}>
          <div className={styles["footer__top"]}>
            <Logo />
            <Menu />
          </div>
          <div className={styles["footer__bottom"]}>
            <Socials />
            <Link to="/" className={styles["footer__polity"]}>
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
