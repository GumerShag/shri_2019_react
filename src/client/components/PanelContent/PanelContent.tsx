import React, {Component} from 'react';
import TableContainer from "../TableContainer/TableContainer";
import {CurrentViewEnum, State} from "../../Types/Types";
import ContentViewerContainer from "../ContentViewerContainer/ContentViewerContainer";
import {connect} from "react-redux";

interface PanelContentProps {
    currentView: CurrentViewEnum
}
class PanelContent extends Component<PanelContentProps> {
    constructor(props: PanelContentProps) {
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

const mapStateToProps = (state: State) => ({
    currentView: state.currentView
});

export default connect(mapStateToProps)(PanelContent);
