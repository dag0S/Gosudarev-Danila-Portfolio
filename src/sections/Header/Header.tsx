import { FC, useState } from "react";
import Menu from "../../components/Menu/Menu";

import styles from "./Header.module.scss";
import Logo from "../../components/Logo/Logo";
import ButtonHamburger from "../../components/ButtonHamburger/ButtonHamburger";
import cn from "classnames";

const Header: FC = () => {
  const [toggle, setToggle] = useState(false);

  const handlerToggle = () => setToggle((prev) => !prev);

  return (
    <header className={styles["header"]}>
      <div className="container">
        <div className={styles["header__inner"]}>
          <Logo />
          <Menu className={styles["hidden"]} />
          <ButtonHamburger toggle={toggle} onClick={handlerToggle} />
          <Menu
            className={cn(styles["mobile-menu"], {
              [styles["mobile-menu--active"]]: toggle,
            })}
            onClick={handlerToggle}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
