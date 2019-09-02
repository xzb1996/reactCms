import { hotBooksAsyncAction } from "@actions/books"

export const mapStateToProps = (state) => ({
    hotBooks:state.books.hotbooks,
    count:state.books.count
})


export const mapDispatchToProps = (dispatch) => ({
    getHotBooks() {
        dispatch(hotBooksAsyncAction())
    }
})