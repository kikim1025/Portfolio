import React from 'react';

const TabButton = (props) => (
    <div className=
        {props.tabName}
        onClick={() => props.changeTab(props.constName)}
    >
        {props.name}
    </div>
);

export default TabButton;