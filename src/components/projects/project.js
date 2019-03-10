import React from "react";

export const Project = props => {
	return (
		<div>
			<a href={props.siteUrl} target="_blank">
				{" "}
				<h2>{props.title}</h2>
				<img src={props.image.resize.src} />
			</a>
			<div>
				<a href={props.githubUrl} target="_blank">
					View source on github{" "}
					<img
						src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
						style={{ width: "50px" }}
					/>
				</a>
			</div>
			<p>{props.description.description}</p>
			{props.specialNotes && props.specialNotes.specialNotes && (
				<p style={{ fontWeight: 700 }}>
					{props.specialNotes.specialNotes}
				</p>
			)}
			<ul>
				{props.tags.map(tag => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		</div>
	);
};
