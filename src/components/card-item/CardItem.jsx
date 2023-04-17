import { useNavigate } from 'react-router-dom';
import { StyledCard, StyledInfoContainer } from './styles';

const CardItem = ({ img, name, population, region, capital, cca3 }) => {
	const navigate = useNavigate();
	return (
		<StyledCard onClick={e => navigate(`/country/${cca3}`)}>
			<img src={img} alt='' />
			<StyledInfoContainer>
				<p>{name}</p>
				<p>Population: {population}</p>
				<p>Region: {region}</p>
				<p>Capital: {capital}</p>
			</StyledInfoContainer>
		</StyledCard>
	);
};

export default CardItem;
