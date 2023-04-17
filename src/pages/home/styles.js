import styled from 'styled-components';

const StyledHomePage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 2rem;
	margin-bottom: 2rem;
`;

const StyledCardContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 4rem;
	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
`;

export { StyledCardContainer, StyledHomePage, StyledInputContainer };
