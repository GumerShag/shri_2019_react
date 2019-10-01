import React, {Component} from 'react';

export default class Table extends Component {
    render() {
        return (
            <table className="data-table data-table_col-5">
                <thead className="data-table__head">
                <tr className="data-table-row">
                    <th className="data-table-row__cell-header">
                        <span className="text text_color-ghost text_size-m">Name</span>
                    </th>
                    <th className="data-table-row__cell-header">
                        <span className="text text_color-ghost text_size-m">Last commit</span>
                    </th>
                    <th className="data-table-row__cell-header">
                        <span className="text text_color-ghost text_size-m">Commit Message</span>
                    </th>
                    <th className="data-table-row__cell-header">
                        <span className="text text_color-ghost text_size-m">Commiter</span>
                    </th>
                    <th className="data-table-row__cell-header">
                        <span className="text text_color-ghost text_size-m">Updated</span>
                    </th>
                </tr>
                </thead>

                <tbody className="data-table__body">

                </tbody>
            </table>
        )
    }
}
