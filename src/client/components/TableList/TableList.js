import React from "react";
import TableHead from "../TableHead/TableHead";
import TableListItems from "../TableListItems/TableListItems";

const TableList = ({files, urlProps}) => {
    const columns = ['Name', 'Last commit', 'Commit message', 'Committer', 'Updated'];
    return (
        <table className="data-table data-table_col-5">
            <TableHead columns={columns}/>
            <TableListItems files={files} currentUrl={urlProps.location.pathname}/>
        </table>
    )
};

export default TableList