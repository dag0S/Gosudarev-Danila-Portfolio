import { FC, useState } from "react";
import { CategoriesProps } from "./CategoriesProps";
import cn from "classnames";

import styles from "./Categories.module.scss";

const Categories: FC<CategoriesProps> = ({ list }) => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className={styles["list"]}>
      {list.map((item, i) => (
        <div
          className={cn(styles["item"], {
            [styles["item__active"]]: isActive === i,
          })}
          key={i}
          onClick={() => setIsActive(i)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Categories;
