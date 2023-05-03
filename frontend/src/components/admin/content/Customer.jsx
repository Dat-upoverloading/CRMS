import React, { useEffect, useState } from "react";
import AddCustomerForm from "./AddCustomerForm";
import { API } from "../../../AxiosConfig";

import "./Customer.css";

function toggle() {
	if (document.getElementById("form").style.display === "flex") document.getElementById("form").style.display = "none";
	else document.getElementById("form").style.display = "flex";
}

const Customer = () => {
	useEffect(() => {
		getUsers();
	}, []);

	const [customer, setCustomer] = useState([]);

	function addCustomer({ name, age, gender, phoneNumber }) {
		API.post("/admin/customer", { id: "1", name: name, age: age, gender: gender, phoneNumber: phoneNumber });
	}

	async function getUsers() {
		await API.get("/admin/customer").then(({ data }) => setCustomer(data));
	}

	console.log("customer: ", customer);

	return (
		<div className="customer">
			<div className="customer-form-button-container">
				<button className="customer-form-button" onClick={() => toggle()}>
					Thêm khách hàng
				</button>
			</div>

			<div className="customer-container">
				{customer.length <= 0 ? (
					<div>No customer</div>
				) : (
					customer.map((c, index) => {
						return (
							<div key={index} className="customer-holder">
								ID: {c.id}
								<br />
								Name: {c.name}
								<br />
								Phone number: {c.phoneNumber}
								<br />
								Gender : {c.gender === true ? "Nam" : "Nữ"}
							</div>
						);
					})
				)}
			</div>

			<AddCustomerForm onSubmit = {addCustomer}></AddCustomerForm>
		</div>
	);
};

export default Customer;
