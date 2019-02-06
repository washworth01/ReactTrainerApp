import React, {Component} from 'react';
import './App.css';

class Header extends Component {
    render() {
        return (
            <div class="Header">
                <h1>{this.props.headerProp}</h1>
            </div>
        );
    }
}

export default Header;