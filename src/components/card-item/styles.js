import styled from 'styled-components';

const StyledCard = styled.div`
	width: 264px;
	box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
	border-radius: 5px;
	margin-left: auto;
	margin-right: auto;
`;

const StyledInfoContainer = styled.div`
	padding: 1rem;
	padding-bottom: 2rem;
`;

const StyledCountryName = styled.p`
	font-size: 1.125rem;
	font-weight: bolder;
`;
const StyledSpecTitle = styled.p`
	font-weight: bolder;
`;

const StyledSpan = styled.span`
	font-weight: 500;
`;

const StyledImg = styled.img`
	height: 160px;
	width: 100%;
	object-fit: cover;
`;

export {
	StyledCard,
	StyledInfoContainer,
	StyledCountryName,
	StyledSpecTitle,
	StyledSpan,
	StyledImg
};
