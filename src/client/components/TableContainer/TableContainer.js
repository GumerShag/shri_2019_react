import React from 'react';
import {connect} from 'react-redux';
import TableList from '../TableList/TableList'
import {fetchFilesFromRepository} from '../../actions/Actions'
import {withRouter} from 'react-router-dom';

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

const TableContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TableList));
export default TableContainer
