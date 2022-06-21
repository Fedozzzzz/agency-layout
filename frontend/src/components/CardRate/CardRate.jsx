import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '../common/svg/Icons/StarIcon';
import './CardRate.scss';

const classnames = require('classnames');

function CardRate({ className }) {
    return (
        <div className={classnames('rate-card', className)}>
            <div className="rate-card__title">
                <StarIcon className="icon" />
                <span>Great Project</span>
            </div>
            <div className="rate-card__text">
                <span className="rate-card__text_bold">800+</span>&nbsp;<span>Done</span>
            </div>
        </div>
    );
}

CardRate.propTypes = {
    className: PropTypes.string,
};

CardRate.defaultProps = {
    className: null,
};

export default CardRate;
