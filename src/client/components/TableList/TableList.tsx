import React from "react";
import TableHead from "../TableHead/TableHead";
import TableListItems from "../TableListItems/TableListItems";
import './TableList.scss';
import {getClassName} from '../../helpers/ClassNaming'
import {File} from "../../Types/Types";

const cnTableList = getClassName('table-list');
interface UrlProps {
    location: LocationData
}
interface LocationData {
    pathname: string
}
//fixme: urlProps ANY
const TableList = (props: any) => {
    const columns = ['Name', 'Last commit', 'Commit message', 'Committer', 'Updated'];
    const files: Array<File> = props.files;
    const urlProps: string = props.urlProps.location.pathname;
    return (
        <table className={cnTableList({col: 5})}>
            <thead className={cnTableList('head')}>
                <TableHead columns={columns}/>
            </thead>
            <tbody className={cnTableList('body')}>
                 <TableListItems files={files} currentUrl={urlProps}/>
            </tbody>
        </table>
    )
};

export default TableList