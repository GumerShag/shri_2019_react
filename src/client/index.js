import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {applyMiddleware, createStore} from "redux";
import reducer from "./Reducers/reducers";
import thunk from "redux-thunk";
import NotFound from "./components/NotFound/NotFound";

const preloadedState = {files: [], content: [], currentView: 'table', routes: []};

const store = createStore(reducer, preloadedState, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/404">
                    <NotFound/>
                </Route>
                <Route path="/:repositoryId/tree/master*">
                    <App/>
                </Route>
                <Route path="/:repositoryId/blob/master*">
                    <App/>
                </Route>
                <Route path="/:repositoryId?">
                    <App/>
                </Route>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById("root"));