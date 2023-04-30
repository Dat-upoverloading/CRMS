import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";

import Admin from "./components/admin/Admin";

function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={"Hello"} />
					<Route path="/admin" element={<Admin/>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
