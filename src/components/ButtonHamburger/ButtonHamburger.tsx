import { FC } from "react";

import styles from "./ButtonHamburger.module.scss";
import { ButtonHamburgerProps } from "./ButtonHamburgerProps";
import cn from "classnames";

const ButtonHamburger: FC<ButtonHamburgerProps> = ({ onClick, toggle }) => {
  return (
    <button
      className={cn(styles["btn"], {
        [styles["btn--active"]]: toggle,
      })}
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

export default ButtonHamburger;
