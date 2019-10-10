import './css/main.scss';
import React, {Component} from "react";
import {Header} from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import {Main} from './components/Main/Main'
import {fetchDataFromFile, fetchFilesFromDirectory, fetchFilesFromRepository, updateRoutes} from "./actions/Actions";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {dispatch, match} = this.props;
        updateStateByDispatch(dispatch, match);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match !== prevProps.match) {
            const {dispatch, match } = this.props;
            updateStateByDispatch(dispatch, match);
        }
    }

    render() {
        return (
            <>
                <div className="theme theme_color_default">
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </>
        );
    }
}
const updateStateByDispatch = (dispatch, match) => {
    const uriArr = match.url.split('/');

    dispatch(updateRoutes(getRoutes(uriArr)));

    if (match.url.includes('tree')) {
        dispatch(fetchFilesFromDirectory(match.url));
        return;
    }
    if (match.url.includes('blob')) {
        dispatch(fetchDataFromFile(match.url));
        return;
    }
    if (match.params.repositoryId) {
        dispatch(fetchFilesFromRepository(match.params));
    }
}

const mapStateToProps = (state, urlProps) => ({
    state,
    urlProps
});

const getRoutes = uriArr => {
    const routes = [];
    uriArr.reduce((path, currentPath, index) => {
        let full = `${path}/${currentPath}`;
        if (index !== 2 && index !== 3) {
            routes.push({
                path: full,
                name: currentPath
            })
        }
        return full;
    });
    return routes;
};

export default withRouter(connect(mapStateToProps)(App));