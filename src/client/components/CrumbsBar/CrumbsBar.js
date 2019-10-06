import React, {Component} from 'react';
import uuid from 'uuid';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import './CrumbsBar.scss'
import {getClassName} from "../../helpers/ClassNaming";

const cnCrumbsBar = getClassName('crumbs-bar');

class CrumbsBar extends Component {
    render() {
        return (
            <div className={cnCrumbsBar()}>
                <div className={cnCrumbsBar('content')}>
                    {this.props.routes.map(route => (
                        <Link key={uuid.v1()}  className={cnCrumbsBar('link')} to={route.path}>{route.name}</Link>
                    ))}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, urlProps) => ({
    routes: [...state.routes]
});

export default connect(mapStateToProps)(CrumbsBar);



