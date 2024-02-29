import { FC } from "react";
import { socialsList } from "../../assets/data/data";
import IconsSVG from "./IconsSVG";

import styles from "./Socials.module.scss";

const Socials: FC = () => {
  return (
    <ul className={styles["list"]}>
      {socialsList.map((item) => (
        <li key={item.id}>
          <a
            className={styles["item"]}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconsSVG id={item.iconId} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
