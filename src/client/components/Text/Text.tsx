import React, {Component} from 'react';
import {getClassName} from "../../helpers/ClassNaming";
import './Text.scss'

const cnCrumbsBar = getClassName('text');
interface TextProps {
    className: string;
}
class Text extends Component<TextProps> {
    render() {
        return (
            <>
                <span className={this.props.className}>{this.props.children}</span>
            </>
        )
    }
}
export default Text;