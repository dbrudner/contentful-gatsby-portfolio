import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
	position: fixed;
	width: calc(100vw - 17px);
	bottom: 0;
	height: 60px;
	background-color: white;
	border-top: 1px solid black;

	ul {
		max-width: 300px;
		padding: 0 30px;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;

		li {
			img {
				width: 35px;
				margin: auto;
				margin-top: 15px;
			}
		}
	}
`;

export const Footer = () => {
	return (
		<StyledFooter>
			<ul>
				<li>
					<a href="https://github.com/dbrudner" target="_blank">
						<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/dbrudner/"
						target="_blank"
					>
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1024px-Linkedin.svg.png" />
					</a>
				</li>
				<li>
					<a href="https://twitter.com/DaveBrudner" target="_blank">
						<img src="https://upload.wikimedia.org/wikipedia/fr/archive/c/c8/20160903181213%21Twitter_Bird.svg" />
					</a>
				</li>
				<li>
					<a href="https://www.twitch.tv/dbrudner" target="_blank">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Twitch.svg/768px-Twitch.svg.png" />
					</a>
				</li>
			</ul>
		</StyledFooter>
	);
};
