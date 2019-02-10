import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className="gameSlogan">Test Your Memory!</li>
                    <li className="itemCenter text-center">May I Take your Order? Perhaps Baby you can Chive my Car Burger?</li>
                    <li className="itemRight">Score: {this.props.score}</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;