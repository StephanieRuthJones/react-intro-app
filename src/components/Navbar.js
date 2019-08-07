import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About'
import App from '../App'

const NavBar = (props) => {
    return (
        <Router>
            <div className="nav-div">
                <nav className="navbar navbar-expand-lg navbar-light bg-light row-fluid">
                    <a className="navbar-brand" href="#">Trivia Extravaganza!!!!!</a>


                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/trivia">Trivia</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about/">About</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/trivia/" exact component={ App.js } />
                <Route path="/about/" component={ About } />

            </div>
        </Router>
    );
}

export default NavBar;