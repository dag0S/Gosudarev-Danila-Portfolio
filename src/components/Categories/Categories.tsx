import { FC, forwardRef } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { categoriesChange } from "../../redux/slices/worksSlice";
import { RootState } from "../../redux/store";
import { motion } from "framer-motion";

import { CategoriesProps } from "./CategoriesProps";

import styles from "./Categories.module.scss";

const Categories: FC<CategoriesProps> = forwardRef<
  HTMLDivElement,
  CategoriesProps
>(({ list }, ref) => {
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.works.categories);

  return (
    <div className={styles["list"]} ref={ref}>
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
});

export const MCategories = motion(Categories);
export default Categories;
