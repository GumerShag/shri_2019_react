import React from "react";
import {getClassName} from '../../helpers/ClassNaming'
import './TableHead.scss'

const cnTableHead = getClassName('table-head');
const TableHead = ({columns = ['Name', 'Last commit', 'Commit message', 'Commiter', 'Updated']}) => {
    return (
        <>
            <tr className={cnTableHead()}>
                {columns.map((column, index) => (
                    <th key={index} className={cnTableHead('cell-header')}>
                        <span className="text text_color-ghost text_size-m">{column}</span>
                    </th>
                ))}
            </tr>
        </>
    )
};

export default TableHead