import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.css';

const Header = () => (
    <div className='header'>
        <Link className='option' to='/'>ABOUT</Link>
        <Link className='option' to='/projects'>PROJECTS</Link>
    </div>
);

export default Header;
