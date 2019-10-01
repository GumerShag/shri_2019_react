import React, {Component} from 'react';

export default class PanelNavigationBar extends Component {
    render() {
        return (
            <div className="panel-navigation-bar">
                <nav className="navigation-bar">
                    <a className="navigation-bar__tab navigation-bar__tab_selected navigation-bar__tab_size_s navigation-bar__tab_indent-r text_bold text_color-primary">FILES</a>
                    <a className="navigation-bar__tab navigation-bar__tab_size_s navigation-bar__tab_indent-r text_bold text_color-ghost">BRANCHES</a>
                </nav>
            </div>
        )
    }
}
