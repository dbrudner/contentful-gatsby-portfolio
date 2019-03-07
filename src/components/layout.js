import React from "react";
import Container from "./container";
import Navigation from "./navigation";

export default function Layout(props) {
	return (
		<>
			<Navigation />
			<Container>{props.children}</Container>
		</>
	);
}
