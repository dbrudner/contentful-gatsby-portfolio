import React from "react";
import Container from "./container";
import Navigation from "./nav/navigation";
import Helmet from "react-helmet";
import "./layout.css";

export default function Layout(props) {
	return (
		<>
			<Helmet>
				<link
					href="https://fonts.googleapis.com/css?family=Lato|Roboto+Slab"
					rel="stylesheet"
				/>
			</Helmet>
			<Navigation />
			<Container>{props.children}</Container>
		</>
	);
}
