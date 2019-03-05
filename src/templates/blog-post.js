import React from "react";
import Layout from "../components/layout";

class BlogPostTemplate extends React.Component {
	render() {
		return (
			<Layout location={this.props.location}>
				<div>hey</div>
			</Layout>
		);
	}
}

export default BlogPostTemplate;
