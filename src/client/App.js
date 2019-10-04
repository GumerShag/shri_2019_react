import './css/main.scss';
import React, {Component} from "react";
import {Header} from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import {Main} from './components/Main/Main'
import {fetchDataFromFile, fetchFilesFromDirectory, fetchFilesFromRepository} from "./Actions/Actions";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {dispatch, match} = this.props;
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
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match !== prevProps.match) {
            const {dispatch, match} = this.props;
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

const mapStateToProps = (state, urlProps) => ({
    state,
    urlProps
});

export default withRouter(connect(mapStateToProps)(App));