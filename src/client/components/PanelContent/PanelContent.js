import React, {Component} from 'react';
import Table from "../Table/Table";
import ContentViewerContainer from "../ContentViewerContainer/ContentViewerContainer";
import {connect} from "react-redux";


class PanelContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="panel-content">
                {this.props.currentView === 'table' ? <Table/> : <ContentViewerContainer/>}
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    currentView: state.currentView
});

export default connect(mapStateToProps)(PanelContent);
