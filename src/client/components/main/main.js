import React, {Component} from 'react';
import CrumbsBar from '../crumbs-bar/crumbs-bar'
import PanelHeader from '../panel-header/panel-header'
import PanelNavigationBar from '../panel-navigation-bar/panel-navigation-bar'
import PanelContent from '../panel-content/panel-content'
import Table from '../table/table'


export default class Main extends Component {
    render() {
        return (
            <main className="main-panel">
                <CrumbsBar/>
                <PanelHeader/>
                <PanelNavigationBar/>
                <PanelContent>
                    <Table/>
                </PanelContent>
            </main>
        )
    }
}
