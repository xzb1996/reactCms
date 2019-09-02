import { hotBooksApi } from "@api/books"

import { createAction } from "redux-actions";

export const hotBooksAction = createAction("HOT_BOOKS",val=>val);

export const hotBooksAsyncAction = ()=>{
    return async (dispatch) =>{
        let data = await hotBooksApi();
        // console.log(data,111);
        dispatch(hotBooksAction(data))
    }
}