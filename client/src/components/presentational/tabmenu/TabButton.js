import React from 'react';
import './TabButton.css';

const TabButton = (props) => (
    <div className={'button '+ props.dir}
        onClick={() => props.changeTab(props.des)}
    >
        {props.name}
    </div>
);

export default TabButton;