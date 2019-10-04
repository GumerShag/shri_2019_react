import React, {Component} from "react";
import {Header} from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import {Main} from './components/Main/Main'
import {fetchDataFromFile} from "./Actions/Actions";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class FileDetails extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {dispatch, match} = this.props;
        if (match.url.includes('blob')) {
            dispatch(fetchDataFromFile(match.url));
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

export default withRouter(connect(mapStateToProps)(FileDetails));