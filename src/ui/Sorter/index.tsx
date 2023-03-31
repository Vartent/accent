import { Select } from "antd";

import { sorterOptions } from "@/data/Sorter";
import { useAppDispatch } from "@/store";
import { updateSorterValue } from "@/store/Books/Books.actions";
import styles from "@/styles/Filter.module.css";

import { Sorter, SorterEnum } from "../Filter/index.type";

const Sorter = () => {
  const dispatch = useAppDispatch();

  const handleChange = (value: Sorter) => {
    dispatch(updateSorterValue(value));
  };

  return (
    <div className={styles["select-container"]}>
      <div className={styles["select-title"]}>Sort by</div>
      <Select
        onChange={handleChange}
        className={styles["filter-sorter-select"]}
        options={sorterOptions}
        defaultValue={SorterEnum.relevance}
      />
    </div>
  );
};

export default Sorter;
