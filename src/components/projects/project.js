import React from "react";

export const Project = props => {
	console.log(props);
	return (
		<div>
			<h3>
				<a href={props.siteUrl} target="_blank">
					{" "}
					{props.title}
				</a>
			</h3>
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
