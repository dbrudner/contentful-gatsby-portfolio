import React from "react";
import Layout from "../components/layout";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const Blog = props => {
	console.log(props);
	return (
		<Layout>
			<div
				dangerouslySetInnerHTML={{
					__html: documentToHtmlString(props.pageContext.post.json)
				}}
			/>
		</Layout>
	);
};

export default Blog;
