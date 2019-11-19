import React from 'react';
import LOGO from '../assets/Logo/Logo-instock.png';

export default function Header() {
	return <div>
		    <header class="header">
    <img class="header__logo" src={LOGO} alt="InStock"/>
    <nav class="header__navbar">
        <ul class="header__navbar-list">
            <li class="header__navbar-item" id="active-bio"><a href="">Inventory</a></li>
            <li class="header__navbar-item"><a href="./pages/shows.html">Locations</a></li>
        </ul>
    </nav>
    </header>
	</div>;
}
