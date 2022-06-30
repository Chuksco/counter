import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';


// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
    console.log('NavBar - Rendered');

    return (
        <nav className="navbar navbar-light bg-light">
            <h2 className="navbar-brand">
                NavBar {" "} 
                    <Badge bg="secondary">
                        {totalCounters}
                    </Badge>
            </h2>
        </nav>
    );
};

export default  NavBar;