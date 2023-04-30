import React from "react";
import { useState } from "react";

import { Button } from "react-bootstrap";

import "./ToggleButton.css";

const ToggleButton = (props) => {
	const [toggleButton, setToggleButton] = useState(false);
	const [activeButton, setActiveButton] = useState(-1);

	function onToggle() {
		setToggleButton(!toggleButton);
	}

	function onActiveSet(index) {
		if (index === activeButton) setActiveButton(-1);
		else setActiveButton(index);
	}

	return (
		<div>
			<Button onClick={onToggle} className={"toggle-button-" + (toggleButton ? "active" : "inactive")}>
				{props.button.name}
			</Button>
			{toggleButton &&
				props.button.value.map((choice, index) => {
					return (
						<Button
							key={index}
							onClick={() => onActiveSet(index)}
							className={"dropdown-button-" + (index === activeButton ? "active" : "inactive")}
						>
							{choice}
						</Button>
					);
				})}
		</div>
	);
};

export default ToggleButton;
