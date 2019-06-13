import React from 'react';
import TabMain from './tab-main/TabMain';
import TabProjects from './tab-projects/TabProjects';
import TabContact from './tab-contact/TabContact';
import { TAB_MAIN, TAB_PROJECTS, TAB_CONTACT } from '../../constants/constants';

// Presentational helper function to selectively present tabs
// Refreshes tabs each time in current specification
const tabSelector = (props) => {
    switch (props.currTab) {
        case TAB_MAIN:
            return <TabMain changeTab={props.changeTab} />
        case TAB_PROJECTS:
            return <TabProjects changeTab={props.changeTab} />
        case TAB_CONTACT:
            return <TabContact changeTab={props.changeTab} />
        default:
            return <div>ERROR RETRIEVING TAB DATA</div>
    };
};

const Tab = (props) => (
    <article id='tab'>
        {
            tabSelector(props)
        }
    </article>
);

export default Tab;