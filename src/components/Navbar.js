import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About'
import App from '../App'

const NavBar = (props) => {
    return (
        <Router>

            <nav className="navbar">


                <p>Trivia Extravaganza!!!!!</p>
                <p>
                    <Link className="nav-link" to="/trivia">Trivia</Link>
                </p>
                <p>
                    <Link className="nav-link" to="/about/">About</Link>
                </p>

            </nav>

            <Route path="/trivia/" exact component={App.js} />
            <Route path="/about/" component={About} />


        </Router>
    );
}

export default NavBar;
