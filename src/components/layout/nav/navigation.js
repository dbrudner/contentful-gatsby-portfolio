import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Nav = styled.nav`
	border-bottom: 1px solid rgba(15, 70, 100, 0.12);
	div {
		max-width: 1180px;
		padding: 0 30px;
		margin: auto;
		ul {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 50px;
		}
	}
`;

export default () => (
	<Nav role="navigation">
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/blog">Blog</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/gallery">Gallery</Link>
				</li>
			</ul>
		</div>
	</Nav>
);
