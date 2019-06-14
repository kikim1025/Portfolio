import React from 'react';
import TabButton from './TabButton';
import { TAB_MAIN, TAB_PROJECTS, TAB_CONTACT} from '../../../constants/constants';

// Presentational helper function to change tabmenu
const tabMenuSelector = (currTab, changeTab) => {
    switch (currTab) {
        case TAB_MAIN:
            return  <div>
                        <TabButton dir='left' name='Contact' des={TAB_CONTACT} changeTab={changeTab} />
                        <div id='tab-menu__currTab'>Main</div>
                        <TabButton dir='right' name='Projects' des={TAB_PROJECTS} changeTab={changeTab} />
                    </div>
        case TAB_PROJECTS:
            return  <div>
                        <TabButton dir='left' name='Main' des={TAB_MAIN} changeTab={changeTab} />
                        <div id='tab-menu__currTab'>Projects</div>
                        <TabButton dir='right' name='Contact' des={TAB_CONTACT} changeTab={changeTab} />
                    </div>
        case TAB_CONTACT:
            return  <div>
                        <TabButton dir='left' name='Projects' des={TAB_PROJECTS} changeTab={changeTab} />
                        <div id='tab-menu__currTab'>Contact</div>
                        <TabButton dir='right' name='Main' des={TAB_MAIN} changeTab={changeTab} />
                    </div>
        default:
            return <div>ERROR RETRIEVING TAB DATA</div>
    };
};

const TabMenu = (props) => (
    <nav id='tab-menu'>
        {
            tabMenuSelector(props.currTab, props.changeTab)
        }
    </nav>
);

export default TabMenu;