import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const Index = props => {
	const {
		header,
		pageContent,
		banner
	} = props.data.allContentfulPage.edges[0].node;
	return (
		<Layout banner={banner.file.url}>
			<h1>{header}</h1>
			<div
				dangerouslySetInnerHTML={{
					__html: documentToHtmlString(pageContent.json)
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
	}
`;

export default Index;
