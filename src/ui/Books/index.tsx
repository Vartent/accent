import { useEffect } from "react";

import { Button } from "antd";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "@/store";
import {
  submitBookRequest,
  submitMoreBooks,
  submitSearchRequest,
} from "@/store/Items/Books.actions";
import styles from "@/styles/Books.module.css";
import { BASE_URL, MAX_RESULTS } from "@/utils/constants";
import { RequestData } from "@/utils/httpSearch";

import BookCard from "./Book";

const BooksGrid = () => {
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
    dispatch(submitMoreBooks(requestData));
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
      <div className={styles["books-grid-container"]}>
        {items ? items.map((value) => <BookCard item={value} />) : null}
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

export default BooksGrid;
