import React, {Component} from 'react';
import { connect } from 'react-redux';
import TableList from '../TableList/TableList'
import { fetchFiles } from '../../Actions/Actions'

const mapStateToProps = (state) => ({
   files: [...state.files]
});

const mapDispatchToProps = dispatch =>
    ({
        onFetchFiles(){
            dispatch(fetchFiles())
        }
    });

const Table = connect(
    mapStateToProps,
    mapDispatchToProps
)(TableList);
export default Table
