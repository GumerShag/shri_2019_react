import React, {Component} from 'react';
import TableContainer from "../TableContainer/TableContainer";
import ContentViewerContainer from "../ContentViewerContainer/ContentViewerContainer";
import {connect} from "react-redux";


class PanelContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="panel-content">
                {this.props.currentView === 'table' ? <TableContainer/> : <ContentViewerContainer/>}
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    currentView: state.currentView
});

export default connect(mapStateToProps)(PanelContent);
