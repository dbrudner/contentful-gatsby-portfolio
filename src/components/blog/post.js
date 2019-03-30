import React from "react";
import { Link } from "gatsby";

export const Post = ({ node }) => (
	<div key={node.id}>
		<Link to={`/blog/${node.urlPath}`}>
			<div style={{ display: "inline-block" }}>
				<img src={node.image.resize.src} />
			</div>
			<h2>{node.title}</h2>
		</Link>
		<div>
			{node.tags.map(tag => (
				<Link
					to={`/blog/search?term=${tag}`}
					key={tag}
					style={{ marginRight: "10px" }}
				>
					#{tag}
				</Link>
			))}
		</div>
		<p>{node.description}</p>
		{/* {i < a.length - 1 && <hr />} */}
	</div>
);
