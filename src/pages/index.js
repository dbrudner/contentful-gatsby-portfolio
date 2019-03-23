import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Content = styled.div`
	img {
		width: 100%;
	}
`;

const Index = props => {
	const { header, pageContent } = props.data.allContentfulPage.edges[0].node;
	return (
		<Layout>
			<h1>{header}</h1>
			<Content
				dangerouslySetInnerHTML={{
					__html: documentToHtmlString(pageContent.json, {
						renderNode: {
							[BLOCKS.EMBEDDED_ASSET]: asset => {
								return `<img src="${
									fields.file["en-US"].url
								}" alt="${fields.description ||
									fields.title["en-US"]}"/>`;
							}
						}
					})
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
				}
			}
		}
	}
`;

export default Index;
