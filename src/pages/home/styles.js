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
	@media screen and (min-width: 768px) {
		flex-direction: row;
		width: 100%;
		padding-left: 5rem;
		padding-right: 5rem;
		justify-content: space-between;
	}
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
