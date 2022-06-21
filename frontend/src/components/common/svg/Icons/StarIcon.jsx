import React from 'react';

import PropTypes from 'prop-types';

function StarIcon({ className }) {
    return (
        <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.9987 1.33325L10.0587 5.50659L14.6654 6.17992L11.332 9.42659L12.1187 14.0133L7.9987 11.8466L3.8787 14.0133L4.66536 9.42659L1.33203 6.17992L5.9387 5.50659L7.9987 1.33325Z" fill="#F8BD38"/>
        </svg>

    );
}

StarIcon.propTypes = {
    className: PropTypes.string,
};

StarIcon.defaultProps = {
    className: null,
};

export default StarIcon;
