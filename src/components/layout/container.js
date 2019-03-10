import styled from "styled-components";

export default styled.div`
	max-width: 1180px;
	margin: 0 auto;
	padding: 30px;
	& > div {
		display: grid;
		grid-template-columns: ${props =>
			props.smallScreen ? "auto" : "auto 300px"};
	}
`;
