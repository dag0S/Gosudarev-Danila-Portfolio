import { FC } from "react";
import Menu from "../../components/Menu/Menu";

import styles from "./Header.module.scss";
import Logo from "../../components/Logo/Logo";

const Header: FC = () => {
  return (
    <header className={styles["header"]}>
      <div className="container">
        <div className={styles["header__inner"]}>
          <Logo />
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
