import React from "react";
import Container from "./container";
import Navigation from "./nav/navigation";
import Helmet from "react-helmet";
import "./layout.css";
import { Footer } from "./footer";

export default function Layout(props) {
	const smallScreen = (() => {
		if (typeof window !== `undefined`) {
			return window.innerWidth < 768;
		}
	})();

	return (
		<>
			<Helmet>
				<link
					href="https://fonts.googleapis.com/css?family=Lato|Roboto+Slab"
					rel="stylesheet"
				/>
			</Helmet>
			<Navigation />
			<Container smallScreen={smallScreen}>
				<div>
					<div>{props.children}</div>
				</div>
			</Container>
			<Footer />
		</>
	);
}
