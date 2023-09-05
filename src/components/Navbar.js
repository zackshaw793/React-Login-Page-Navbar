import React from 'react';
import './Navbar.css';

const Navbar = () => { 
    return (
       <header>
        <h1 href='/gamenet' id='navTitle'>GamePulse</h1>
        <nav>
            <ul>
                <li><a href='/games'>Games</a></li>
                <li><a href='/guides'>Guides</a></li>
                <li><a href='/gadgets'>Gadgets</a></li>
            </ul>
        </nav>
       </header>
    );
}

export default Navbar