import { FC, useState } from "react";
import { CategoriesProps } from "./CategoriesProps";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { categoriesChange } from "../../redux/slices/worksSlice";

import styles from "./Categories.module.scss";

const Categories: FC<CategoriesProps> = ({ list }) => {
  const [isActive, setIsActive] = useState(0);

  const dispatch = useDispatch();

  return (
    <div className={styles["list"]}>
      {list.map((item, i) => (
        <div
          className={cn(styles["item"], {
            [styles["item__active"]]: isActive === i,
          })}
          key={i}
          onClick={() => {
            dispatch(categoriesChange());
            setIsActive(i);
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Categories;
