import React, { useState } from "react";

import "./AddCustomerForm.css";

function toggle(content) {
	document.getElementById("form").style.display = content;
}

const AddCustomerForm = ({ onSubmit }) => {
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [gender, setGender] = useState(true);
	const [phoneNumber, setPhoneNumber] = useState("");

	const handleNameChange = (event) => {
		if (event.target.value.length === 0) event.preventDefault();
		setName(event.target.value);
	};

	return (
		<div id="form" className="add-customer-form">
			<p>Thêm khách hàng</p>
			<div className="form-input-container">
				<div className="form-input">
					<p>Tên*</p>
					<input onChange={(event) => handleNameChange(event)}></input>
				</div>
				<div className="form-input">
					<p>Tuổi</p>
					<input onChange={(event) => setAge(event)}></input>
				</div>
				<div className="form-input">
					<p>Giới tính</p>
					<input onChange={(event) => setGender(event)}></input>
				</div>
				<div className="form-input">
					<p>Số điện thoại*</p>
					<input onChange={(event) => setPhoneNumber(event)}></input>
				</div>
			</div>
			<div className="form-button-container">
				<button
					className="form-button"
					onClick={() => {
						toggle("none");

						onSubmit({ name, age, gender, phoneNumber });
					}}
				>
					Thêm
				</button>
				<button className="form-button" onClick={() => toggle("none")}>
					Đóng
				</button>
			</div>
		</div>
	);
};

export default AddCustomerForm;
