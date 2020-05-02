import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const Header = () => <div className="container">
    <div className="row">
        <div className="col-lg-offset-4">
            <header className="nasa-header">
                <a href="/"><img src={logo} className="nasa-logo" alt="logo" /></a>
            </header>
        </div>
    </div>
</div>

export default Header;