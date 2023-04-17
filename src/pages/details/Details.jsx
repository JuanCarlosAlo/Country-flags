import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { URLS } from '../../constants/URLS';
import { useFetch } from '../../hooks/useFetch';
import { v4 } from 'uuid';
import BorderCountry from '../../components/border-country/BorderCountry';
import {
	StyledBackButton,
	StyledBorderContainer,
	StyledDetailsPage
} from './styles';

const Details = () => {
	const [countryData, setCountryData] = useState([]);
	const { countryId } = useParams();

	const navigate = useNavigate();
	const { data, setUrlToFetch } = useFetch(URLS.COUNTRIE + countryId);

	useEffect(() => {
		setCountryData(data);
		setUrlToFetch(URLS.COUNTRIE + countryId);
	}, [data, countryId]);

	if (countryData.length === 0) {
		return <h2>Loading</h2>;
	} else {
		const dataCountrie = countryData[0];
		const tld = dataCountrie.tld;
		const currencies = Object.values(dataCountrie.currencies);
		const languages = Object.values(dataCountrie.languages);
		const nativeName = Object.values(dataCountrie.name.nativeName);
		const borders = dataCountrie.borders;
		return (
			<StyledDetailsPage>
				<StyledBackButton onClick={() => navigate('/')}>Back</StyledBackButton>
				<img src={dataCountrie.flags.png} alt='' />
				<p>{dataCountrie.name.common}</p>
				<p>
					Native Name: <span>{nativeName[0].common}</span>
				</p>
				<p>
					Population: <span>{dataCountrie.population}</span>
				</p>
				<p>
					Region: <span>{dataCountrie.region}</span>
				</p>
				<p>
					Sub Region: <span>{dataCountrie.subregion}</span>
				</p>
				<p>
					Capital: <span>{dataCountrie.capital}</span>
				</p>
				<p>
					Top Level Domain:{' '}
					{tld.map(element => (
						<span key={v4()}>{element}</span>
					))}
				</p>
				<p>
					Currencies:{' '}
					{currencies.map(element => (
						<span key={v4()}>{element.name}</span>
					))}
				</p>

				<p>
					Currencies:{' '}
					{languages.map(element => (
						<span key={v4()}>{element}</span>
					))}
				</p>

				<p>Borders Countries: </p>
				<StyledBorderContainer>
					{!borders
						? 'none'
						: borders.map(element => (
								<BorderCountry key={v4()} cca3={element} />
						  ))}
				</StyledBorderContainer>
			</StyledDetailsPage>
		);
	}
};

export default Details;
