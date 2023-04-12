import { Button, Checkbox, Select } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "@/store";
import { updateFilterValue } from "@/store/Items/Books.actions";
import styles from "@/styles/Filter.module.css";

import brands from "../../data/brands.json";

const Filter = () => {
  const optionsBrands = brands.map((item) => ({
    label: item.title,
    value: item.id,
  }));

  const filterValues = useSelector((state: RootState) => state.items.filter);
  const dispatch = useAppDispatch();

  const handleChange = (value: CheckboxValueType[]) => {
    const numberValues = value.map((val) =>
      typeof val === "number" ? val : Number(val)
    );

    dispatch(updateFilterValue(numberValues));
  };

  const handleClick = () => {
    dispatch(updateFilterValue([]));
  };

  return (
    <div className={styles["select-container"]}>
      <div className={styles["select-title"]}>Фильтр</div>
      <Checkbox.Group
        style={{ display: "flex", flexDirection: "column" }}
        options={optionsBrands}
        onChange={handleChange}
        value={filterValues}
      />
      <Button style={{ margin: "15px 0 15px 0" }} onClick={handleClick}>
        Очистить
      </Button>
    </div>
  );
};

export default Filter;
