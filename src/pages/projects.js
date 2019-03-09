import React from "react";
import Layout from "../components/layout";
import { Project } from "../components/projects";

const getProjects = props => props.data.allContentfulProject.edges;

const Projects = props => {
	console.log(props);

	return (
		<Layout>
			<h1>Projects</h1>

			{getProjects(props).map(({ node }) => (
				<Project key={node.id} {...node} />
			))}
		</Layout>
	);
};

export const pageQuery = graphql`
	query {
		allContentfulProject {
			edges {
				node {
					title
					githubUrl
					id
					siteUrl
					tags
					description {
						description
					}
				}
			}
		}
	}
`;

export default Projects;
