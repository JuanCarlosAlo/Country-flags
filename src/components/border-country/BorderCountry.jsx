import { useNavigate } from 'react-router-dom';
import { StyledBorderButton } from './styles';

const BorderCountry = ({ cca3 }) => {
	const navigate = useNavigate();
	return (
		<StyledBorderButton onClick={() => navigate(`/country/${cca3}`)}>
			<p>{cca3}</p>
		</StyledBorderButton>
	);
};

export default BorderCountry;
