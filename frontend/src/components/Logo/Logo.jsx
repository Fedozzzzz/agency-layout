import React from 'react';

import LogoIcon from '../common/svg/Icons/LogoIcon';
import './Logo.scss';

function Logo() {
    return (
        <div className="logo">
            <LogoIcon className="logo-icon" />
            <div className="company-name">
                <div className="company-name__text company-name__text_bold">Agency</div>
                <div className="company-name__text company-name__text_small">Creative</div>
            </div>
        </div>
    );
}

export default Logo;
