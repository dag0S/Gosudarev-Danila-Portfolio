import { FC } from "react";
import { CategoriesProps } from "./CategoriesProps";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { categoriesChange } from "../../redux/slices/worksSlice";
import { RootState } from "../../redux/store";

import styles from "./Categories.module.scss";

const Categories: FC<CategoriesProps> = ({ list }) => {
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.works.categories);

  return (
    <div className={styles["list"]}>
      {list.map((item, i) => (
        <div
          className={cn(styles["item"], {
            [styles["item__active"]]: category === i,
          })}
          key={i}
          onClick={() => {
            dispatch(categoriesChange(i));
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Categories;
