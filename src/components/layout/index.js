import React from "react";
import Container from "./container";
import Navigation from "./nav/navigation";
import Helmet from "react-helmet";
import "./layout.css";
import { Timeline } from "react-twitter-widgets";

export default function Layout(props) {
	const smallScreen = (() => {
		if (window) {
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
					{!smallScreen && (
						<Timeline
							dataSource={{
								sourceType: "profile",
								screenName: "daveBrudner"
							}}
							options={{
								username: "daveBrudner",
								height: "400"
							}}
						/>
					)}
				</div>
			</Container>
		</>
	);
}
