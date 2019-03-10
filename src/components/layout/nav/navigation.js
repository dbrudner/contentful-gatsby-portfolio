import React from "react";
import { Link } from "gatsby";

export default () => (
	<nav role="navigation">
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
	</nav>
);
