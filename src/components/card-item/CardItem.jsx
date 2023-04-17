import { useNavigate } from 'react-router-dom';
import {
	StyledCard,
	StyledCountryName,
	StyledImg,
	StyledInfoContainer,
	StyledSpan,
	StyledSpecTitle
} from './styles';

const CardItem = ({ img, name, population, region, capital, cca3 }) => {
	const navigate = useNavigate();
	return (
		<StyledCard onClick={e => navigate(`/country/${cca3}`)}>
			<StyledImg src={img} alt='' />
			<StyledInfoContainer>
				<StyledCountryName>{name}</StyledCountryName>
				<StyledSpecTitle>
					Population:{' '}
					<StyledSpan>{population.toLocaleString('es-ES')}</StyledSpan>
				</StyledSpecTitle>
				<StyledSpecTitle>
					Region: <StyledSpan>{region}</StyledSpan>
				</StyledSpecTitle>
				<StyledSpecTitle>
					Capital: <StyledSpan>{capital}</StyledSpan>
				</StyledSpecTitle>
			</StyledInfoContainer>
		</StyledCard>
	);
};

export default CardItem;
