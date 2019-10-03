import './css/main.scss';
import React, {Component} from "react";
import {Header} from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import {Main} from './components/Main/Main'
import {fetchFiles} from "./Actions/Actions";
import { connect } from 'react-redux'

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchFiles())
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

export default connect()(App);