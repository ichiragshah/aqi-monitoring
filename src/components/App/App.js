import React from "react";
import Header from "../Header/Header";
import Home from "../Home/Home"
import './App.css'


const App = () => {

    return (
        <div className="app">
            <Header />
            <div className="container">
                <Home />
            </div>
        </div>
    )
}

export default App;
