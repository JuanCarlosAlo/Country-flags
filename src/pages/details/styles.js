import styled from 'styled-components';

const StyledDetailsPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 1rem;
`;

const StyledBackButton = styled.div`
	display: flex;
	font-size: 0.875rem;
	justify-content: center;
	align-items: center;
	width: 104px;
	height: 32px;
	margin-bottom: 4rem;
	box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
	border-radius: 2px;
`;
const StyledBorderContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
`;

export { StyledDetailsPage, StyledBackButton, StyledBorderContainer };
