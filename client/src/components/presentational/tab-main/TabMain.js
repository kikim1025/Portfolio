import React from 'react';
import './TabMain.css';

// This tab simply uses SVG assets to display the main graphic through CSS
const TabMain = () => (
    <div id='tab-main'>
        <div className='circle background'></div>
        <div className='circle outer'></div>
        <div className='circle middle'></div>
        <div className='circle inner'></div>
        <div className='circle name'></div>
    </div>
);

export default TabMain;