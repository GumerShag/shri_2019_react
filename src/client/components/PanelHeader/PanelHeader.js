import React from 'react';

export const PanelHeader = () => {
    return (
        <div className="panel-header">
            <div className="panel-header__title">
                <div className="panel-header__info"><span className="text text_size-l">arcadia</span>
                    <span className="icon-plus">
                                        <div className="icon-plus icon-plus__block">
                                            <span
                                                className="drop-down-menu__text text_size-l text_color-ghost">trunk</span>
                                        </div>
                                     <div
                                         className="icon-plus__icon icon-plus__icon icon icon__arrow icon_size-m icon-plus__icon_indent-l_m"></div>
                            </span>
                </div>
            </div>

            <div className="panel-header__info panel-header__info-indent-t">
                <span className="text text_size-s">Last commit</span>
                <a href='#' className="link link_size-s text_color-link">c45fdf</a>
                <span className="text text_size-s">on</span>
                <a href='#' className="link link_size-s text_color-link">20 Oct 2017, 12:24</a>
                <span className="text text_size-s">by</span>
                <a href='#' className="user link text_color-primary text_size-s"><span
                    className="user__first-letter">a</span>ntonov</a>
            </div>
        </div>
    )
}
