import { useEffect } from "react";

import { Skeleton } from "antd";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { SearchHeaderLayout } from "@/layouts";
import { RootState, useAppDispatch } from "@/store";
import { submitBookRequest } from "@/store/Books/Books.actions";
import { BookReview } from "@/ui";

const bookPage = () => {
  const dispatch = useAppDispatch();
  const {
    query: { bookId },
  } = useRouter();

  const book = useSelector((state: RootState) => state.books.selectedBook);
  const isBookLoading = useSelector(
    (state: RootState) => state.books.isLoadingBook
  );

  useEffect(() => {
    dispatch(submitBookRequest(bookId as string));
  }, [dispatch, bookId]);

  return (
    <>
      <SearchHeaderLayout>
        {isBookLoading || !book ? (
          <Skeleton active />
        ) : (
          <BookReview book={book} />
        )}
      </SearchHeaderLayout>
    </>
  );
};

export default bookPage;
