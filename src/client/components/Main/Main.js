import React from 'react';
import {CrumbsBar} from '../CrumbsBar/CrumbsBar'
import {PanelHeader} from '../PanelHeader/PanelHeader'
import {PanelNavigationBar} from '../PanelNavigationBar/PanelNavigationBar'
import {PanelContent} from '../PanelContent/PanelContent'


export const Main = () => {
    return (
        <main className="main-panel">
            <CrumbsBar/>
            <PanelHeader/>
            <PanelNavigationBar/>
            <PanelContent/>
        </main>
    )
};
