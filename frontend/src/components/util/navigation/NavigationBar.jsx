import React from "react";

import { Navbar, NavLink } from "react-bootstrap";

import "./NavigationBar.css";

const NavigationBar = () => {
	return (
		<div className="navigation-bar">
			<div className="logo">Mindustry Tool</div>
			<Navbar>
				<NavLink href="/home">Home</NavLink>
				<NavLink href="/schematic">Schematic</NavLink>
				<NavLink href="/map">Map</NavLink>
				<NavLink href="/logic">Logic</NavLink>
			</Navbar>
		</div>
	);
};

export default NavigationBar;
