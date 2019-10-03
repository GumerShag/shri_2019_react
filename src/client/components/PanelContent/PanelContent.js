import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import reducer from "../../Reducers/FilesReducer";
import Table from "../Table/Table";


export const PanelContent = () => {
        return (
            <div className="panel-content">
                <Table/>
            </div>
        )
}
