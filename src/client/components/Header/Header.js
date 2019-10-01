import React from 'react';

export const Header = () => {
    return (
        <header className="header">
            <span className="logo"></span>
            <nav className="navigation-bar">
                <a className="navigation-bar__tab navigation-bar__tab_selected navigation-bar__tab_size-m">
                    <span className="drop-down-menu">
                        <span className="drop-down-menu__text text_size-m text_color-primary"><span
                            className="text_bold">Repository</span> Arc</span>
                        <div className="drop-down-menu__content">
                            <p>master</p>
                            <p>develop</p>
                        </div>
                    </span>
                </a>
            </nav>
        </header>
    )
};
