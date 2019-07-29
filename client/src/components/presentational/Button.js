import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => (
    <span className={'button button--'+ props.dir}>
        <Link className='button__link' to={'/Portfolio/' + props.name}>{props.name}</Link>
    </span>
);

export default Button;