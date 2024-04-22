import { FC, forwardRef } from "react";
import { motion } from "framer-motion";

import { TechnologyCardProps } from "./TechnologyCardProps";

import styles from "./TechnologyCard.module.scss";

const TechnologyCard: FC<TechnologyCardProps> = forwardRef<
  HTMLDivElement,
  TechnologyCardProps
>(({ item }, ref) => {
  return (
    <div className={styles["card"]} ref={ref}>
      <img src={item.icon} alt={item.name} />
      <div>{item.name}</div>
    </div>
  );
});

export const MTechnologyCard = motion(TechnologyCard);
export default TechnologyCard;
