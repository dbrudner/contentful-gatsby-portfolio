import React from "react";
import styled from "styled-components";
import { Post } from "../blog/post";
import { Link } from "gatsby";

const StyledLatestBlog = styled.div`
	border: 1px solid black;
	padding: 20px;

	h2 {
		margin-top: 0;
	}
`;

export const LatestBlog = ({ node }) => {
	return (
		<StyledLatestBlog>
			<h2>Most recent blog post</h2>
			<Post node={node} />
			<hr />
			<p>
				View more posts{" "}
				<Link to="/blog">
					<strong>here</strong>
				</Link>
				.
			</p>
		</StyledLatestBlog>
	);
};
