import "./Admin.css";

import React from "react";
import Icon from "./Sidebar";
import IconButton from "./IconButton";
import { WrenchIcon, UserIcon } from "../../Global";
import { Outlet, useNavigate } from "react-router-dom";

const Admin = () => {
	const navigate = useNavigate();
	return (
		<div id="admin-page">
			<Icon id="side-bar">
				<h2>Hệ thống</h2>
				<IconButton icon={UserIcon} onClick={() => navigate("/admin/customer")}>
					Khách hàng
				</IconButton>
				<IconButton icon={WrenchIcon} onClick={() => navigate("/admin/bill")}>
					Hóa đơn
				</IconButton>
				<IconButton icon={WrenchIcon} onClick={() => navigate("/admin/employee")}>
					Nhân viên
				</IconButton>
				<IconButton icon={WrenchIcon} onClick={() => navigate("/admin/manage")}>
					Quản lý
				</IconButton>
				<IconButton icon={WrenchIcon} onClick={() => navigate("/admin/statistic")}>
					Thống kê
				</IconButton>
			</Icon>
			<Outlet />
		</div>
	);
};

export default Admin;
