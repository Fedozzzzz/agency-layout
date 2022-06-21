import React from 'react';
import Button from '../common/buttons/Button/Button';
import './StartProject.scss';
import RoundBlue from '../common/svg/images/RoundBlue';
import RoundRed from '../common/svg/images/RoundRed';

function StartProject() {
    return (
        <div className="start-project">
            <div className="title">
                Make your dream
                <br />
                business goal come true
            </div>
            <div className="text">
                when you need us for improve your business,
                <br />
                then come with us to help your business have reach
                <br />
                it, you just sit and feel that goal.
            </div>
            <Button className="button-wrapper" text="Start Project" />
            {/* TODO: add paralax */}
            <RoundRed className="round-red" />
            <RoundBlue className="round-blue" />
        </div>
    );
}

export default StartProject;
