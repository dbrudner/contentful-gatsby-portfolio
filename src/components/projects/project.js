import React from "react";
import { Tags } from "../common/tags";

export const Project = props => {
	return (
		<div>
			<a href={props.siteUrl} target="_blank">
				{" "}
				<h2>{props.title}</h2>
			</a>
			<Tags>
				{props.tags.map(tag => (
					<a
						href={`https://twitter.com/search?q=${tag}&src=typd&lang=en`}
						target="_blank"
					>
						<li key={tag}>#{tag}</li>
					</a>
				))}
			</Tags>
			<a href={props.siteUrl} target="_blank">
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
				<p style={{ fontWeight: 700, color: "red" }}>
					<span>*</span> {props.specialNotes.specialNotes}
				</p>
			)}
		</div>
	);
};
