import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

const Header = () => <div className="container">
    <div className="row">
        <div className="col-6">
            <header className="nasa-header">
                <a href="/"><img src={logo} className="nasa-logo" alt="logo" /></a>
            </header>
        </div>
        <div className="col-5">
            <NavLink className="float-right nav-potd" to="/potd">POTD</NavLink></div>
    </div>
</div>

export default Header;