import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from "./store"
import { Provider } from "react-redux"
import { HashRouter as Router, Route } from "react-router-dom"
// import { nolayoutRouter } from "@router"
// import routerEach from "@utils/routerEach"

// let RouteComponent = routerEach(nolayoutRouter)

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Route path="/" component={App} />
            {/* {
                RouteComponent
            } */}
        </Provider>
    </Router>,
    document.getElementById('root')
);
