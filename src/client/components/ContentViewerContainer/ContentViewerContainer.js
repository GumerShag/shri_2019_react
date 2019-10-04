import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ContentViewer from "../ContentViewer/ContentViewer";

const mapStateToProps = (state, urlProps) => ({
    content: [...state.content],
    urlProps
});
const ContentViewerContainer = withRouter(connect(mapStateToProps)(ContentViewer));

export default ContentViewerContainer;
