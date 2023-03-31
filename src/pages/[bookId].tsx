import { SearchHeaderLayout } from "@/layouts";
import { RootState, useAppDispatch } from "@/store";
import { submitBookRequest } from "@/store/Books/Books.actions";
import { BookReview } from "@/ui";
import { Skeleton, Spin } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const bookPage = () => {

    const dispatch = useAppDispatch();
    const { 
        push, 
        query: { bookId }, 
    } = useRouter()
    const book = useSelector((state: RootState) => state.books.selectedBook)
    const isBookLoading = useSelector((state: RootState) => state.books.isLoadingBook)

    useEffect(() => {
        dispatch(submitBookRequest(bookId as string))
    }, [dispatch, bookId])

    return(
        <>
            <SearchHeaderLayout>
                {isBookLoading || !book ? <Skeleton active/> : <BookReview book={book}/> }
            </SearchHeaderLayout>
        </>
    )
}

export default bookPage