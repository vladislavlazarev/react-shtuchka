import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render () {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={'/'} className="navbar-brand" href="#">{this.props.appName}</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <Link to={'/AddHero'} className="nav-link">Add hero</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={'/Settings'} className="nav-link">Settings</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}