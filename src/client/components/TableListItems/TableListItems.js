import React from "react";
import uuid from 'uuid';
import {Link} from 'react-router-dom'
import {getClassName} from '../../helpers/ClassNaming'
import './TableListItems.scss'

const cnTableListItems = getClassName('table-list-items');

const TableListItems = ({files = [], currentUrl}) => {
    return (
        <>
            {files.map((file) => (
                <tr key={uuid.v1()} className={cnTableListItems()}>
                    <td className={cnTableListItems('cell', {name: true})}>
                            <span className="icon icon-plus__icon_indent-r_l">
                                {/*Move to css*/}
                                {!file.isDirectory ?
                                    <svg width="10" height="13" viewBox="0 0 10 13" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.5 3.35938C9.5 3.24219 9.40625 3.05469 9.3125 2.96094L7.03906 0.6875C6.92188
                                          0.570312 6.78125 0.5 6.64062 0.5H6.5V3.5H9.5V3.35938ZM6.3125 4.25C5.98438 4.25 5.75
                                           4.01562 5.75 3.6875V0.5H1.0625C0.734375 0.5 0.5 0.757812 0.5 1.0625V11.9375C0.5 12.2656
                                            0.734375 12.5 1.0625 12.5H8.9375C9.24219 12.5 9.5 12.2656 9.5 11.9375V4.25H6.3125ZM3.38281
                                             9.89844C3.35938 9.92188 3.3125 9.94531 3.28906 9.94531C3.26562 9.94531 3.21875 9.92188 3.19531
                                              9.89844L1.67188 8.46875C1.64844 8.46875 1.64844 8.42188 1.64844 8.375C1.64844 8.35156 1.64844 8.30469
                                               1.67188 8.30469L3.19531 6.875C3.21875 6.85156 3.26562 6.82812 3.28906 6.82812C3.3125 6.82812 3.35938
                                                6.85156 3.38281 6.875L3.82812 7.36719C3.85156 7.39062 3.875 7.41406 3.875 7.46094C3.875 7.48438 3.85156
                                                7.53125 3.82812 7.55469L2.86719 8.375L3.82812 9.21875C3.85156 9.24219 3.875 9.28906 3.875 9.3125C3.875
                                                9.35938 3.85156 9.38281 3.82812 9.40625L3.38281 9.89844ZM4.57812 11.0703L3.94531 10.9062C3.875 10.8828 3.85156 10.8359 3.85156 10.7656V10.7422L5.28125 5.77344C5.30469 5.72656 5.35156 5.67969 5.39844 5.67969C5.42188 5.67969 5.44531 5.67969 5.44531 5.70312L6.07812 5.86719C6.14844 5.89062 6.17188 5.9375 6.17188 6.00781V6.03125L4.74219 11C4.71875 11.0469 4.67188 11.0938 4.625 11.0938C4.60156 11.0938 4.57812 11.0938 4.57812 11.0703ZM8.35156 8.46875L6.82812 9.89844C6.80469 9.92188 6.75781 9.94531 6.73438 9.94531C6.71094 9.94531 6.66406 9.92188 6.64062 9.89844L6.19531 9.40625C6.17188 9.38281 6.14844 9.35938 6.14844 9.3125C6.14844 9.28906 6.17188 9.24219 6.19531 9.21875L7.15625 8.375L6.19531 7.55469C6.17188 7.53125 6.14844 7.48438 6.14844 7.46094C6.14844 7.41406 6.17188 7.39062 6.19531 7.36719L6.64062 6.875C6.66406 6.85156 6.71094 6.82812 6.73438 6.82812C6.75781 6.82812 6.80469 6.85156 6.82812 6.875L8.35156 8.30469C8.375 8.30469 8.39844 8.35156 8.39844 8.375C8.39844 8.42188 8.375 8.46875 8.35156 8.46875Z"
                                              fill="black"/>
                                    </svg>
                                    :
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.875 1.5H6.375L4.875 0H1.125C0.492188 0 0 0.515625 0 1.125V7.875C0 8.50781
                                    0.492188 9 1.125 9H10.875C11.4844 9 12 8.50781 12 7.875V2.625C12 2.01562 11.4844 1.5
                                    10.875 1.5Z" fill="black"/>
                                    </svg>
                                }

                            </span>
                        <Link className={'link text_color-link'}
                              to={file.isDirectory ? `${currentUrl}${file.path}` : `${currentUrl.replace('tree', 'blob')}${file.path}`}><span>{file.id}</span></Link>
                    </td>
                    <td className={cnTableListItems('cell', {'last-commit': true})}>
                        <a href='#' className="link text_color-link">d45gcv</a>
                    </td>
                    <td className={cnTableListItems('cell', {'commit-message': true})}><span
                        className="text text_color-primary">[ui] make some change</span>
                    </td>
                    <td className={cnTableListItems('cell', {'committer': true})}>
                        <a href='#' className="user link text_color-primary text_size-m"><span
                            className="user__first-letter">a</span>nataolyev</a>
                    </td>
                    <td className={cnTableListItems('cell', {'updated': true})}><span
                        className="text text_color-primary">4s ago</span>
                    </td>
                </tr>
            ))}
        </>
    )
};

export default TableListItems