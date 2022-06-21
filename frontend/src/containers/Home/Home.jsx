import React from 'react';
import Header from '../../components/Header/Header';
import StartProject from '../../components/StartProject/StartProject';
import './Home.scss';

function Home() {
    return (
        <div className="home">
            <Header />
            <StartProject />
        </div>
    );
}

export default Home;
