import styled from "styled-components";
import { Colors } from "../../constants/colors";

export const Tags = styled.ul`
	margin-bottom: 30px;
	li {
		padding: 0.25em 0.4em;
		font-weight: 700;
		display: inline-block;
		font-size: 14px;
		:first-child {
			padding-left: 0;
			margin-left: 0;
		}
	}
`;
