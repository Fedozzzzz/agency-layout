import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";

function App() {
    return (
        // eslint-disable-next-line react/jsx-filename-extension
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <div>HELLO</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
