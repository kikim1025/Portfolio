import React from 'react';
import { withRouter } from 'react-router-dom'; 
import Button from './Button';

const NavBar = (props) => {

    // Presentational helper function to change how navbar looks
    const navBarSelector = (location) => {
        switch (location) {  
            case '/Projects':
                return  <nav className='navbar'>
                            <Button dir='left' name='Main' />
                            <div id='navbar__name'>Projects</div>
                            <Button dir='right' name='Contact' />
                        </nav>
            case '/Contact':
                return  <nav className='navbar'>
                            <Button dir='left' name='Projects' />
                            <div id='navbar__name'>Contact</div>
                            <Button dir='right' name='Main' />
                        </nav>
            default:
                return  <nav className='navbar'>
                            <Button dir='left' name='Contact'  />
                            <div id='navbar__name'>Main</div>
                            <Button dir='right' name='Projects' />
                        </nav>
        };
    };

    return (
        navBarSelector(props.location.pathname)
    );
};

export default withRouter(NavBar);