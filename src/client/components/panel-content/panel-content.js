import React, {Component} from 'react';

export default class PanelContent extends Component {
    render() {
        return (
            <div className="panel-content">
                {this.props.children}
            </div>
        )
    }
}
