import './css/main.scss';
import React, {Component} from "react";
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './components/main/main'

class App extends Component {
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

export default App;