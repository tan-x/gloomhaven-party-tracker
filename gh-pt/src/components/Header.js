import React from 'react';
import wind from '../xpicon.svg';
import '../style/Header.css';
import ghfont from '../style/PirataOne-Gloomhaven.ttf';

export default function Header() {
    return (
        <header>
            <h1 style={{fontFamily: ghfont}}>Party</h1>
            <img src={wind} className="App-logo" alt="logo" />
            <h1>Tracker</h1>
            
        </header>
    )
}