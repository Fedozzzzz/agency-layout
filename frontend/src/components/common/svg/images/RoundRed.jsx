import React from 'react';
import PropTypes from 'prop-types';

function RoundRed({ className }) {
    return (
        <svg className={className} width="28" height="56" viewBox="0 0 28 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_1412)">
                <circle cx="28" cy="25" r="8" fill="url(#paint0_linear_1_1412)" />
            </g>
            <defs>
                <filter id="filter0_d_1_1412" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1412" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1412" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_1_1412" x1="28" y1="17" x2="28" y2="33" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF8E8E" />
                    <stop offset="1" stopColor="#F62424" />
                </linearGradient>
            </defs>
        </svg>
    );
}

RoundRed.propTypes = {
    className: PropTypes.string,
};

RoundRed.defaultProps = {
    className: null,
};

export default RoundRed;
