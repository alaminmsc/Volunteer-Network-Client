import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-section">
            <Navbar></Navbar>
            <div className="search-section">
                <h1 className="text-center">I GROW BY HELPING PEOPLE in NEED.</h1>
                <div className="d-flex align-item-center justify-content-center mt-4">
                <input type="text" placeholder="Search" className="search-input"></input>
                <input type="submit" className="btn btn-primary" />
                </div>
            </div>
        </div>
    );
};

export default Header;