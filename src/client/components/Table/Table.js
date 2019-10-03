import React, {Component} from 'react';
import { connect } from 'react-redux';
import TableList from '../TableList/TableList'
import { fetchFilesFromRepository } from '../../Actions/Actions'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, urlProps) => ({
   files: [...state.files],
   urlProps
});

const mapDispatchToProps = dispatch =>
    ({
        onFetchFiles(){
            dispatch(fetchFilesFromRepository())
        }
    });

const Table = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TableList));
export default Table
