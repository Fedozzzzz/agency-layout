import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '../common/svg/Icons/StarIcon';
import './CardReview.scss';

const classnames = require('classnames');

function CardReview({ className }) {
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

CardReview.propTypes = {
    className: PropTypes.string,
};

CardReview.defaultProps = {
    className: null,
};

export default CardReview;
