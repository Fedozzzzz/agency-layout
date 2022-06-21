import React from 'react';

import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import './Header.scss';

function Header() {
    return (
        <div className="header">
            <Logo />
            <Navbar />
        </div>
    );
}

export default Header;
