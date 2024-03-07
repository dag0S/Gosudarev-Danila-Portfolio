import { FC, useState } from "react";
import { CategoriesProps } from "./CategoriesProps";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { categoriesChange } from "../../redux/slices/worksSlice";
import { RootState } from "../../redux/store";

import styles from "./Categories.module.scss";

const Categories: FC<CategoriesProps> = ({ list }) => {
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.works.categories)
  
  const [isActive, setIsActive] = useState(category);

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
