import React from "react";

export const Project = props => {
	console.log(props.image.resize.src);
	return (
		<div>
			<a href={props.siteUrl} target="_blank">
				{" "}
				<h2>{props.title}</h2>
				<img src={props.image.resize.src} />
			</a>
			<p>{props.description.description}</p>
			<a href={props.githubUrl} target="_blank">
				Source
			</a>
			<ul>
				{props.tags.map(tag => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		</div>
	);
};
