import React from "react";
import Layout from "../components/layout";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const Blog = props => {
	console.log(props);
	return (
		<Layout>
			<div
				dangerouslySetInnerHTML={{
					__html: documentToHtmlString(props.pageContext.post.json, {
						renderNode: {
							[BLOCKS.EMBEDDED_ASSET]: ({
								data: {
									target: { fields }
								}
							}) =>
								`<img src="${fields.file.url}" height="${
									fields.file.details.image.height
								}" width="${
									fields.file.details.image.width
								}" alt="${fields.description}"/>`
						}
					})
				}}
			/>
		</Layout>
	);
};

export default Blog;
