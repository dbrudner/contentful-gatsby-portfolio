import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { graphql } from "gatsby";
import React from "react";
import { ProjectSpotlight, LatestBlog } from "../components/home";
import Layout from "../components/layout";
import styled from "styled-components";

const Spotlights = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-column-gap: 60px;
	margin-top: 30px;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-row-gap: 30px;
	}
`;

const Index = props => {
	const {
		header,
		pageContent,
		banner,
	} = props.data.allContentfulPage.edges[0].node;

	const blog =
		props.data.allContentfulBlogPost.edges[
			props.data.allContentfulBlogPost.edges.length - 1
		].node;

	const project =
		props.data.allContentfulProject.edges[
			props.data.allContentfulProject.edges.length - 1
		].node;

	const smallScreen = (() => {
		if (typeof window !== `undefined`) {
			return window.innerWidth < 768;
		}
	})();

	return (
		<Layout>
			<h1>Dave Brudner - Software Dev, Cat Enthusiast</h1>
			<Spotlights smallScreen={smallScreen}>
				<ProjectSpotlight {...project} />
				<LatestBlog node={blog} />
			</Spotlights>
			<h2>{header}</h2>
			<img src={banner.file.url} style={{ width: "100%" }} />
			<div
				dangerouslySetInnerHTML={{
					__html: documentToHtmlString(pageContent.json),
				}}
			/>
		</Layout>
	);
};

export const pageQuery = graphql`
	query {
		allContentfulPage(filter: { header: { eq: "About" } }) {
			edges {
				node {
					header
					pageContent {
						json
					}
					banner {
						file {
							url
						}
					}
				}
			}
		}
		allContentfulProject(sort: { fields: createdAt }) {
			edges {
				node {
					siteUrl
					description {
						description
					}
					githubUrl
					tags
					createdAt
					title
					image {
						resize(width: 300, height: 300) {
							src
						}
					}
				}
			}
		}
		allContentfulBlogPost(sort: { fields: createdAt }) {
			edges {
				node {
					title
					id
					tags
					urlPath
					description
					image {
						resize(width: 300) {
							src
							width
							height
						}
					}
				}
			}
		}
	}
`;

export default Index;
