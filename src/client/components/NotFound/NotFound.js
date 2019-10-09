import React, {Component} from 'react';
import {getClassName} from '../../helpers/ClassNaming'
import './NotFound.scss'

const cnNotFound = getClassName('not-found');

export default class NotFound extends Component {
    render() {
        return(
            <div className={cnNotFound()}>Not found 404</div>
        )
    }
};
