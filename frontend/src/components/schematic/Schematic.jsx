import NavigationBar from "../util/navigation/NavigationBar";

import React, { useState } from "react";

import "./Schematic.css";
import SearchIcon from "../util/Icon";


const buildResult = ({ authorName, likes, dislike, schematicPath }, index) => {
	return (
		<div key={index} className="schematic-preview">
			<img className="schematic-img" src={schematicPath} alt="Not found"></img>
			<div className="schematic-description">
				Author name: {authorName}
				<br />
				Like: {likes}
				<br />
				Dislike: {dislike}
				<br />
			</div>
		</div>
	);
};

const Schematic = () => {
	const [inputText, setInputText] = useState([
		{
			authorName: "Shar",
			likes: 0,
			dislike: 0,
			schematicPath: "https://lh3.googleusercontent.com/izWFN-PyWnB6CswfwsgKsAG5gCQcLb5tq-YWeD8uI0vgZFHgBoZxPBntT17JLDuyD0t83g=s85",
		},
	]);
	const handleInput = (e) => {
		setInputText([
			{
				authorName: "Shar",
				likes: 0,
				dislike: 0,
				schematicPath: "https://lh3.googleusercontent.com/izWFN-PyWnB6CswfwsgKsAG5gCQcLb5tq-YWeD8uI0vgZFHgBoZxPBntT17JLDuyD0t83g=s85",
			},
			{
				authorName: "Shar",
				likes: 0,
				dislike: 0,
				schematicPath: "https://lh3.googleusercontent.com/izWFN-PyWnB6CswfwsgKsAG5gCQcLb5tq-YWeD8uI0vgZFHgBoZxPBntT17JLDuyD0t83g=s85",
			},
			{
				authorName: "Shar",
				likes: 0,
				dislike: 0,
				schematicPath: "https://lh3.googleusercontent.com/izWFN-PyWnB6CswfwsgKsAG5gCQcLb5tq-YWeD8uI0vgZFHgBoZxPBntT17JLDuyD0t83g=s85",
			},
		]);
	};

	return (
		<div className="schematic">
			<NavigationBar />
			<div className="search-bar-container">
				<SearchIcon />
				<input className="search-bar" type="text" placeholder="Schematic name" onChange={handleInput}></input>
			</div>
			<div className="schematic-container">
				{inputText.map((schematic) => {
					return buildResult(schematic);
				})}
			</div>
		</div>
	);
};

export default Schematic;
