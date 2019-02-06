import React, { Component } from 'react';
import App from "./App.js";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './header.js'

class NavBar extends Component {
    render() {
        return (
            <Router>
                <div class="Nav-Bar">
                    <ul>
                        <li><Link to="/">LOGO</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/trainer">Trainers</Link></li>
                        <li><Link to="/add-new-trainer">Add New Trainer</Link></li>
                    </ul>
                    {/* <Route exact path="/" component={App}/> */}
                    {/* <Route path="/add-new-trainer" component={App}/> */}
                </div>
            </Router>
        )
    }
}

export default NavBar;