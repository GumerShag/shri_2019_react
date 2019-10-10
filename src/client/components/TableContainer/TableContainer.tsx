import React from 'react';
import {connect} from 'react-redux';
import {State} from "../../Types/Types";
import TableList from '../TableList/TableList'
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state: State, urlProps: object) => ({
   files: [...state.files],
   urlProps
});

const TableContainer = withRouter(connect(mapStateToProps)(TableList));
export default TableContainer
