import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo/Logo-instock.svg";

export default function Header() {
<<<<<<< HEAD
  return (
    <div className="header__return">
      <header className="header">
        <ul className="header__list">
          <div className="header__elements">
            <Link to="/inventories" className="header__logo-box">
              <li className="header__logo">
                <img src={Logo} alt="InStock" className="header__logo-image" />
              </li>
            </Link>
            <div className="header__nav">
              <li className="header__link-wrapper">
                <NavLink
                  to="/inventories"
                  className="header__link"
                  activeClassName="header__link-active"
                >
                  Inventory
                </NavLink>
              </li>
              <li className="header__link-wrapper">
                <NavLink
                  to="/locations"
                  className="header__link"
                  activeClassName="header__link-active"
                >
                  Locations
                </NavLink>
              </li>
            </div>
          </div>
        </ul>
      </header>
    </div>
  );
=======
	return (
		<div className="header__return">
			<header className="header">
				<ul className="header__list">
					<div className="header__elements">
						<Link to="/inventory" className="header__logo-box">
							<li className="header__logo">
								<img src={Logo} alt="InStock" className="header__logo-image" />
							</li>
						</Link>
						<div className="header__nav">
							<li className="header__link-wrapper">
								<NavLink to="/inventory" className="header__link" activeClassName="header__link-active">
									Inventory
								</NavLink>
							</li>
							<li className="header__link-wrapper">
								<NavLink to="/locations" className="header__link" activeClassName="header__link-active">
									Locations
								</NavLink>
							</li>
						</div>
					</div>
				</ul>
			</header>
		</div>
	);
>>>>>>> master
}
