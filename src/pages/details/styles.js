import styled from 'styled-components';

const StyledDetailsPage = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 1rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		padding-top: 7rem;
		gap: 9rem;
	}
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
	@media screen and (min-width: 768px) {
		position: absolute;
		top: 1rem;
		left: 1%;
	}
`;
const StyledBorderContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
`;
const StyledImg = styled.img`
	height: 401px;
	width: 560px;
	object-fit: cover;
	margin-bottom: 2.75rem;
	@media screen and (min-width: 768px) {
		width: 560px;
	}
`;
const StyledCountryName = styled.p`
	font-size: 1.375rem;
	font-weight: bold;
	margin-bottom: 2.75rem;
`;
const StyledInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
const StyledInfoColumns = styled.div`
	@media screen and (min-width: 768px) {
		display: flex;
		align-items: center;
		flex-direction: row;

		gap: 7.3125rem;
	}
`;

const StyledInfoTittle = styled.p`
	font-weight: bold;
`;
const StyledInfoSpan = styled.span`
	font-weight: 500;
`;

export {
	StyledDetailsPage,
	StyledBackButton,
	StyledBorderContainer,
	StyledImg,
	StyledInfo,
	StyledInfoTittle,
	StyledInfoSpan,
	StyledCountryName,
	StyledInfoColumns
};
