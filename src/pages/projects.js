import React from "react";
import Layout from "../components/layout";
import { Project } from "../components/projects";

const getProjects = props => props.data.allContentfulProject.edges;

const Projects = props => {
	return (
		<Layout>
			<h1>Projects</h1>
			{getProjects(props).map(({ node }, i) => (
				<>
					<Project key={node.id} {...node} />
					{i < getProjects(props).length - 1 ? <hr /> : null}
				</>
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
					specialNotes {
						specialNotes
					}
					tags
					description {
						description
					}
					image {
						resize(width: 300, height: 300) {
							src
						}
					}
				}
			}
		}
	}
`;

export default Projects;
