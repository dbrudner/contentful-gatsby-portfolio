import React from "react";
import Layout from "../components/layout";

const RootIndex = props => {
	console.log(props.data.allContentfulImage.edges);
	return (
		<Layout>
			<h1>Gallery</h1>
			<p>
				These are pictures I've taken. Most of them have nothing to do
				with programming.
			</p>
			{props.data.allContentfulImage.edges.map(({ node }) => (
				<div>
					<h2>{node.title}</h2>
					<p>{node.description}</p>
					<div>
						<img src={node.image.resize.src} />
					</div>
				</div>
			))}
		</Layout>
	);
};

export const pageQuery = graphql`
	query {
		allContentfulImage {
			edges {
				node {
					id
					title
					createdAt
					description
					image {
						resize(
							width: 300
							height: 300
							cropFocus: CENTER
							resizingBehavior: FILL
						) {
							src
						}
					}
				}
			}
		}
	}
`;

export default RootIndex;
