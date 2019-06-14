import React from 'react';

const TabButton = (props) => (
    <div className={'button '+ props.dir}
        onClick={() => props.changeTab(props.des)}
    >
        {props.name}
    </div>
);

export default TabButton;