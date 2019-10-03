import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from "redux";
import reducer from "./Reducers/FilesReducer";
import thunk from "redux-thunk";

const preloadedState = {files: []};

const store = createStore(reducer, preloadedState, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById("root"));