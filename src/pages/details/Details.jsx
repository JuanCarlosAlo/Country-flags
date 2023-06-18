import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import { v4 } from 'uuid';
import BorderCountry from '../../components/border-country/BorderCountry';
import {
	StyledBackButton,
	StyledBorderContainer,
	StyledCountryName,
	StyledDetailsPage,
	StyledImg,
	StyledInfo,
	StyledInfoColumns,
	StyledInfoSpan,
	StyledInfoTittle
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
				<StyledImg src={dataCountrie.flags.png} alt='' />
				<StyledInfo>
					<StyledInfoColumns>
						<div>
							<StyledCountryName>{dataCountrie.name.common}</StyledCountryName>
							<StyledInfoTittle>
								Native Name:{' '}
								<StyledInfoSpan>{nativeName[0].common}</StyledInfoSpan>
							</StyledInfoTittle>
							<StyledInfoTittle>
								Population:{' '}
								<StyledInfoSpan>
									{dataCountrie.population.toLocaleString('es-ES')}
								</StyledInfoSpan>
							</StyledInfoTittle>
							<StyledInfoTittle>
								Region: <StyledInfoSpan>{dataCountrie.region}</StyledInfoSpan>
							</StyledInfoTittle>
							<StyledInfoTittle>
								Sub Region:{' '}
								<StyledInfoSpan>{dataCountrie.subregion}</StyledInfoSpan>
							</StyledInfoTittle>
							<StyledInfoTittle>
								Capital: <StyledInfoSpan>{dataCountrie.capital}</StyledInfoSpan>
							</StyledInfoTittle>
						</div>

						<div>
							<StyledInfoTittle>
								Top Level Domain:{' '}
								{tld.map(element => (
									<StyledInfoSpan key={v4()}>{element}</StyledInfoSpan>
								))}
							</StyledInfoTittle>
							<StyledInfoTittle>
								Currencies:{' '}
								{currencies.map(element => (
									<StyledInfoSpan key={v4()}>{element.name}</StyledInfoSpan>
								))}
							</StyledInfoTittle>

							<StyledInfoTittle>
								Currencies:{' '}
								{languages.map(element => (
									<StyledInfoSpan key={v4()}>{element}</StyledInfoSpan>
								))}
							</StyledInfoTittle>
						</div>
					</StyledInfoColumns>
					<StyledInfoTittle>Borders Countries: </StyledInfoTittle>
					<StyledBorderContainer>
						{!borders
							? 'none'
							: borders.map(element => (
									<BorderCountry key={v4()} cca3={element} />
							  ))}
					</StyledBorderContainer>
				</StyledInfo>
			</StyledDetailsPage>
		);
	}
};

export default Details;
