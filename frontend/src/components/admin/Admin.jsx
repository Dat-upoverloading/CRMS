import React from "react";

import "./Admin.css";
import Sidebar from "./Sidebar";
import SidebarButton from "./SidebarButton";

const Admin = () => {
	return (
		<div id="admin-page">
			<Sidebar id="side-bar">
				<SidebarButton>Menu</SidebarButton>
				<SidebarButton>Bill</SidebarButton>
				<SidebarButton>Manage</SidebarButton>
			</Sidebar>
		</div>
	);
};

export default Admin;
