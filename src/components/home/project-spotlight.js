import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const ProjectSpotlightStyled = styled.div`
	padding: 20px;
	background-color: #e7f7f1;
	border-radius: 5px;

	h2 {
		margin-top: 0;
	}

	img {
		width: 100%;
		margin-top: 20px;
	}

	.description {
		font-style: italic;
		color: gray;
	}
`;

const sliceDescription = str => {
	return (
		str
			.split(" ")
			.slice(0, 24)
			.join(" ") + "..."
	);
};

export const ProjectSpotlight = props => {
	console.log(props);
	return (
		<ProjectSpotlightStyled>
			<h2>Project spotlight</h2>
			<div>
				<h3>{props.title}</h3>
			</div>
			<a href={props.siteUrl} target="_blank">
				<img src={props.image.resize.src} />
			</a>
			<a href={props.githubUrl} target="_blank">
				View source
			</a>
			<p className="description">
				{sliceDescription(props.description.description)}
			</p>
			<p>
				View more projects <Link to="/projects">here</Link>.
			</p>
		</ProjectSpotlightStyled>
	);
};
