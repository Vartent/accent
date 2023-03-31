import { Select } from "antd";

import { filterOptions } from "@/data/Filter";
import { useAppDispatch } from "@/store";
import { updateFilterValue } from "@/store/Books/Books.actions";
import styles from "@/styles/Filter.module.css";

import { Filter, FilterEnum } from "./index.type";

const Filter = () => {
  const dispatch = useAppDispatch();

  const handleChange = (value: Filter) => {
    dispatch(updateFilterValue(value));
  };

  return (
    <div className={styles["select-container"]}>
      <div className={styles["select-title"]}>filter by</div>
      <Select
        listHeight={150}
        className={styles["filter-sorter-select"]}
        options={filterOptions}
        defaultValue={FilterEnum.all}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
