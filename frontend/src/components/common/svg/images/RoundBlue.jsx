import React from 'react';
import PropTypes from 'prop-types';

function RoundBlue({ className }) {
    return (
        <svg className={className} width="33" height="56" viewBox="0 0 33 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_1411)">
                <circle cx="5" cy="25" r="8" fill="url(#paint0_linear_1_1411)" shapeRendering="crispEdges" />
            </g>
            <defs>
                <filter id="filter0_d_1_1411" x="-23" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1411" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1411" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_1_1411" x1="5" y1="17" x2="5" y2="33" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4485FF" stopOpacity="0.8" />
                    <stop offset="1" stopColor="#377DFF" />
                </linearGradient>
            </defs>
        </svg>

    );
}

RoundBlue.propTypes = {
    className: PropTypes.string,
};

RoundBlue.defaultProps = {
    className: null,
};

export default RoundBlue;
