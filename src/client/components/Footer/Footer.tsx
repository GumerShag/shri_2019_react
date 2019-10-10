import React from 'react';
import Text from '../Text/Text';
import './Footer.scss'
import {getClassName} from "../../helpers/ClassNaming";

const cnFooter = getClassName('footer');
export const Footer = () => {
    return (
        <footer>
            <div className={cnFooter('content')}>
                <Text className={"text text_color-secondary text_size-s"}>Trade Yandex secrets of Yandex LLC Lev Tolstoy</Text>
                <Text className={"text text_color-secondary text_size-s"}>U: 0.1.15</Text>
                <div>
                    <Text className={"copyright text_size-s text_color-secondary"}>© 2007-2019</Text>
                    <Text className={"text text_color-secondary text_size-s"}>
                        <a href="#" className="link link_size-m text_color-link">Yandex</a>
                    </Text>
                </div>
            </div>
        </footer>
    )
};
