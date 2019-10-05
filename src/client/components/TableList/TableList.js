import React from "react";
import TableHead from "../TableHead/TableHead";
import TableListItems from "../TableListItems/TableListItems";
import './TableList.scss';
import {getClassName} from '../../helpers/ClassNaming'

const cnTableList = getClassName('table-list');

const TableList = ({files, urlProps}) => {
    const columns = ['Name', 'Last commit', 'Commit message', 'Committer', 'Updated'];
    return (
        <table className={cnTableList({col: 5})}>
            <thead className={cnTableList('head')}>
                <TableHead columns={columns}/>
            </thead>
            <tbody className={cnTableList('body')}>
                 <TableListItems files={files} currentUrl={urlProps.location.pathname}/>
            </tbody>
        </table>
    )
};

export default TableList