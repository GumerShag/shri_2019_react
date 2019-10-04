import React from 'react';
import {getClassName} from '../../helpers/ClassNaming'
import uuid from 'uuid';
import './ContentViewer.scss'

const cnContentViewer = getClassName('content-viewer');

const ContentViewer = ({content, urlProps}) => {
    return (
        <div className={cnContentViewer()}>
            <div className={cnContentViewer('header')}>
                <div className="icon-plus">
                    <div className="icon-plus icon-plus__icon icon icon__paper icon_size-m"/>
                    <div className="icon-plus icon-plus__block icon-plus_vertical-align_center">
                        <span className="text text_size-s text_bold">ya.make</span>
                        <span className="text text_size-s text_bold text_color-ghost">(4 347 bytes)</span>
                    </div>
                </div>
                <button className="button button_border button_color">
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.375 7.25C12.6797 7.25 12.9375 7.36719 13.1719 7.57812C13.3828 7.8125 13.5 8.07031 13.5 8.375V11.375C13.5 11.7031 13.3828 11.9609 13.1719 12.1719C12.9375 12.4062 12.6797 12.5 12.375 12.5H1.125C0.796875 12.5 0.539062 12.4062 0.328125 12.1719C0.09375 11.9609 0 11.7031 0 11.375V8.375C0 8.07031 0.09375 7.8125 0.328125 7.57812C0.539062 7.36719 0.796875 7.25 1.125 7.25H3.28125L2.20312 6.17188C1.96875 5.9375 1.875 5.67969 1.875 5.375C1.875 5.07031 1.99219 4.8125 2.20312 4.57812C2.41406 4.36719 2.67188 4.25 3 4.25H4.5V1.625C4.5 1.32031 4.59375 1.0625 4.82812 0.828125C5.03906 0.617188 5.29688 0.5 5.625 0.5H7.875C8.17969 0.5 8.4375 0.617188 8.67188 0.828125C8.88281 1.0625 9 1.32031 9 1.625V4.25H10.5C10.8281 4.25 11.0859 4.36719 11.2969 4.57812C11.5078 4.8125 11.625 5.07031 11.625 5.375C11.625 5.67969 11.5312 5.9375 11.2969 6.17188L10.2188 7.25H12.375ZM3 5.375L6.75 9.125L10.5 5.375H7.875V1.625H5.625V5.375H3ZM12.375 11.375V8.375H9.09375L7.54688 9.92188C7.3125 10.1562 7.05469 10.25 6.75 10.25C6.42188 10.25 6.16406 10.1562 5.95312 9.92188L4.40625 8.375H1.125V11.375H12.375ZM10.3125 9.875C10.3125 10.0391 10.3594 10.1797 10.4766 10.2734C10.5703 10.3906 10.7109 10.4375 10.875 10.4375C11.0156 10.4375 11.1562 10.3906 11.2734 10.2734C11.3672 10.1797 11.4375 10.0391 11.4375 9.875C11.4375 9.73438 11.3672 9.59375 11.2734 9.47656C11.1562 9.38281 11.0156 9.3125 10.875 9.3125C10.7109 9.3125 10.5703 9.38281 10.4766 9.47656C10.3594 9.59375 10.3125 9.73438 10.3125 9.875Z"
                            fill="black"/>
                    </svg>
                </button>
            </div>
            <div className={cnContentViewer('body')}>
                {content.map((line, index) => (
                    <div key={uuid.v1()} className={cnContentViewer('row', {line: true})}>
                        <div  className={cnContentViewer('row-number')}>{index}</div>
                        <div  className={cnContentViewer('row-content') + ' text text_color-primary'}>{line}</div>
                    </div>
                ))}
            </div>
        </div>

    )
};

export default ContentViewer;