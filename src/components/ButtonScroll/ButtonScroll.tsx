import { FC, useState } from "react";
import scrollArrow from "../../assets/svg/scrollArrow.svg";
import cn from "classnames";

import styles from "./ButtonScroll.module.scss";

const ButtonScroll: FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className={cn(styles["btn"], {
        [styles["btn--hidden"]]: !visible,
      })}
      onClick={scrollToTop}
    >
      <img src={scrollArrow} alt="скролл вверх" />
    </button>
  );
};

export default ButtonScroll;
