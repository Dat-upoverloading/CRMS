import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Home from "./components/home/Home";
import Map from "./components/map/Map";
import Logic from "./components/logic/Logic";
import Schematic from "./components/schematic/Schematic";

function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/schematic" element={<Schematic />} />
					<Route path="/map" element={<Map />} />
					<Route path="/logic" element={<Logic />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
