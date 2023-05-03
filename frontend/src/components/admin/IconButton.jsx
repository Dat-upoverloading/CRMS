import React from "react";

import "./IconButton.css";

const IconButton = ({ children, icon, onClick }) => {
	return (
		<div className="icon-button">
			{icon}
			<button className="button" onClick={() => onClick()}>
				{children}
			</button>
		</div>
	);
};

export default IconButton;
