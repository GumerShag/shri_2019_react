import './css/main.scss';
import React, {Component} from "react";
import {Header} from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import {Main} from './components/Main/Main'
import {fetchDataFromFile, fetchFilesFromDirectory, fetchFilesFromRepository, updateRoutes} from "./Actions/Actions";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Action, AnyAction} from "redux";
import {Route, State} from "./Types/Types";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

interface AppProps {
    dispatch: ThunkDispatch<void, null, Action>;
    match: object
}
class App extends Component<AppProps> {
    constructor(props: AppProps) {
        super(props)
    }

    componentDidMount() {
        const {dispatch, match} = this.props;
        updateStateByDispatch(dispatch, match);
    }
    componentDidUpdate(prevProps: AppProps, prevState: State) {
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
//fixme: any to MATCH type from react router
const updateStateByDispatch = (dispatch: (action: ThunkAction<void, null, null, Action> | AnyAction) => void, match: any) => {
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
        dispatch(fetchFilesFromRepository(match.params.repositoryId));
    }
};

const mapStateToProps = (state: State, urlProps: any) => ({
    state,
    urlProps
});

const getRoutes = (uriArr: Array<string>): Array<Route> => {
    const routes: Array<Route> = [];
    uriArr.reduce((path: string, currentPath: string, index: number) => {
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