import { FC } from "react";
import { TechnologyCardProps } from "./TechnologyCardProps";

import styles from "./TechnologyCard.module.scss";

const TechnologyCard: FC<TechnologyCardProps> = ({ item }) => {
  return (
    <div className={styles["card"]}>
      <img src={item.icon} alt={item.name} />
      <div>{item.name}</div>
    </div>
  );
};

export default TechnologyCard;
