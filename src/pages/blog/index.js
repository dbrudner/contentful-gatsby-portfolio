import React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";

const Blog = props => {
	return (
		<Layout>
			<h1>Blog</h1>
			{props.data.allContentfulBlogPost.edges.map(({ node }, i, a) => (
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
					{i < a.length - 1 && <hr />}
				</div>
			))}
		</Layout>
	);
};

export const pageQuery = graphql`
	query {
		allContentfulBlogPost {
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

export default Blog;
