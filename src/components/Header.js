import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-container">
            <h2>
                <Link to='/'>
                    Futbol-LF    
                </Link>    
            </h2>
        </header>
    );
};

export default Header;