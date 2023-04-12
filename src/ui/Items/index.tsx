import { useEffect } from "react";

import { Button } from "antd";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "@/store";
import {
  submitMoreItems,
  submitSearchRequest,
} from "@/store/Items/Item.actions";
import styles from "@/styles/Items.module.css";
import { MAX_RESULTS } from "@/utils/constants";
import { RequestData } from "@/utils/httpSearch";

import ItemCard from "./Item";

const ItemsGrid = () => {
  const stateItems = useSelector((state: RootState) => state.items);
  const items = stateItems.items;

  const dispatch = useAppDispatch();

  const requestData: RequestData = {
    startIndex: stateItems.startIndex + MAX_RESULTS,
    filter: stateItems.filter,
  };

  useEffect(() => {
    dispatch(submitSearchRequest({ startIndex: 0, filter: stateItems.filter }));
  }, [dispatch, stateItems.filter]);

  const handleClick = () => {
    console.log(requestData);
    dispatch(submitMoreItems(requestData));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "100px",
      }}
    >
      <div className={styles["Items-grid-container"]}>
        {items ? items.map((value) => <ItemCard item={value} />) : null}
      </div>
      <Button
        style={{
          display:
            stateItems?.items == undefined ||
            stateItems?.items.length == stateItems?.totalItems ||
            stateItems.items.length < MAX_RESULTS
              ? "none"
              : "block",
        }}
        onClick={handleClick}
        className={styles["show-more-button"]}
      >
        Show more
      </Button>
    </div>
  );
};

export default ItemsGrid;
