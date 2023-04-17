import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 80px;
	padding: 1rem;
	margin-bottom: 2rem;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
`;
const StyledTitle = styled.h1`
	font-family: sans-serif;
	font-style: normal;
	font-weight: 800;
	font-size: 14px;
	line-height: 20px;
`;
export { StyledHeader, StyledTitle };
