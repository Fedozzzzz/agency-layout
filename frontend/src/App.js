import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import "./App.css";
import './App.scss';
import Home from './containers/Home/Home';

function App() {
    return (
        // eslint-disable-next-line react/jsx-filename-extension
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
