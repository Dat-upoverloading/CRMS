import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";

import Admin from "./components/admin/Admin";
import Customer from "./components/admin/content/Customer";

function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="" element={"Hello"} />
					<Route path="admin" element={<Admin />}>
						<Route path="customer" element={<Customer />} />
						<Route path="bill" element={<Customer />} />
						<Route path="employee" element={<Customer />} />
						<Route path="manage" element={<Customer />} />
						<Route path="statistic" element={<Customer />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
