import { ChangeEvent } from "react";

import { Input } from "antd";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "@/store";
import {
  submitSearchRequest,
  updateSearchQuery,
} from "@/store/Items/Books.actions";
import styles from "@/styles/Search.module.css";
import { BASE_URL } from "@/utils/constants";
import { RequestData } from "@/utils/httpSearch";

const SearchBar = () => {
  const booksRequestData = useSelector((state: RootState) => state.books);

  const dispatch = useAppDispatch();

  const { push } = useRouter();

  const requestData: RequestData = {
    startIndex: booksRequestData.startIndex,
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchQuery(event.target.value));
  };

  const handleSearch = () => {
    dispatch(submitSearchRequest(requestData));
    push("/");
  };

  return (
    <div className={styles["search-container"]}>
      <h3>Looking for books?</h3>
      <Input.Search
        value={booksRequestData.query}
        onChange={handleChange}
        onSearch={handleSearch}
        className={styles["search-bar"]}
        placeholder="Type in and get it"
      />
    </div>
  );
};

export default SearchBar;
