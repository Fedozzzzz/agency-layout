import React from 'react';
import PropTypes from 'prop-types';

function NavbarIcon({ className }) {
    return (
        <svg className={className} width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.0027 12.7014H10.0027" stroke="#1D1D1D" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25.0027 5.70142H7.00269" stroke="#1D1D1D" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25.0027 19.7014H7.00269" stroke="#1D1D1D" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

NavbarIcon.propTypes = {
    className: PropTypes.string,
};

NavbarIcon.defaultProps = {
    className: null,
};

export default NavbarIcon;
