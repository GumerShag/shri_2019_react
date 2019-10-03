import React from "react";

const TableHead = ({columns = ['Name', 'Last commit', 'Commit message', 'Commiter', 'Updated']}) => {
    return (
            <thead className="data-table__head">
            <tr className="data-table-row">
                {columns.map((column, index) => (
                    <th key={index} className="data-table-row__cell-header">
                        <span className="text text_color-ghost text_size-m">{column}</span>
                    </th>
                ))}
            </tr>
            </thead>
    )
};

export default TableHead