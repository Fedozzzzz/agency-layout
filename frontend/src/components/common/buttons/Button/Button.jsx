import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ text, className }) {
    return (
        <div className={className}>
            <button type="submit" className="button">{text}</button>
        </div>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
};

Button.defaultProps = {
    text: null,
    className: null,
};

export default Button;
