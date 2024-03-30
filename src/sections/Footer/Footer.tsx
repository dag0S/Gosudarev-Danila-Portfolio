import { FC } from "react";

import Logo from "../../components/Logo/Logo";
import Menu from "../../components/Menu/Menu";
import Socials from "../../components/Socials/Socials";

import styles from "./Footer.module.scss";

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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
