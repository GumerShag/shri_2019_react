import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {State, StateProps} from "../../Types/Types";
import ContentViewer from "../ContentViewer/ContentViewer";

const mapStateToProps = (state: State, urlProps: object): StateProps => ({
    content: [...state.content],
    urlProps
});
const ContentViewerContainer = withRouter(connect(mapStateToProps)(ContentViewer));

export default ContentViewerContainer;
