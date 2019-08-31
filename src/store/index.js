import { createStore , combineReducers , applyMiddleware } from "redux"

import reduxThunk from "redux-thunk"

import user from "./reducers/user"
import books from "./reducers/books"

const reducer = combineReducers({
    user,
    books
})
const store = createStore(reducer,applyMiddleware(reduxThunk))

export default store;