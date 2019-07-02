import React from 'react';
import './TabButton.css';

const TabButton = (props) => (
    <span className={'button '+ props.dir}
        onClick={() => props.changeTab(props.des)}
    >
        {props.name}
    </span>
);

export default TabButton;