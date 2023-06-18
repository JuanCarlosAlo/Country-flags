import { v4 } from 'uuid';
import CardItem from '../../components/card-item/CardItem';
import { useFetch } from '../../hooks/useFetch';
import TextInput from '../../components/text-input/TextInput';
import RegionSelect from '../../components/region-select/regionselect';
import { useState } from 'react';
import { URLS } from '../../constants/urls';
import {
	StyledCardContainer,
	StyledHomePage,
	StyledInputContainer
} from './styles';

const Home = () => {
	const [region, setRegion] = useState('0');
	const [typed, setTyped] = useState('');
	const { data, setUrlToFetch, setData } = useFetch(URLS.ALL);

	return (
		<StyledHomePage>
			<StyledInputContainer>
				<TextInput
					typed={typed}
					setTyped={setTyped}
					setUrlToFetch={setUrlToFetch}
					region={region}
				/>
				<RegionSelect
					region={region}
					setRegion={setRegion}
					setUrlToFetch={setUrlToFetch}
				/>
			</StyledInputContainer>
			<StyledCardContainer>
				{data.map(element => (
					<CardItem
						key={v4()}
						img={element.flags.png}
						name={element.name.common}
						population={element.population}
						region={element.region}
						capital={element.capital}
						cca3={element.cca3}
					/>
				))}
			</StyledCardContainer>
		</StyledHomePage>
	);
};

export default Home;
