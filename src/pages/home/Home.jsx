import { v4 } from 'uuid';
import CardItem from '../../components/card-item/CardItem';
import { useFetch } from '../../hooks/useFetch';
import TextInput from '../../components/text-input/TextInput';
import RegionSelect from '../../components/region-select/RegionSelect';
import { useState } from 'react';
import { URLS } from '../../constants/URLS';

const Home = () => {
	const [region, setRegion] = useState('0');
	const [typed, setTyped] = useState('');
	const { data, setUrlToFetch, setData } = useFetch(URLS.ALL);

	return (
		<div>
			<div>
				<TextInput
					typed={typed}
					setTyped={setTyped}
					setData={setData}
					data={data}
				/>
				<RegionSelect
					region={region}
					setRegion={setRegion}
					setUrlToFetch={setUrlToFetch}
				/>
			</div>

			{data.map(element => (
				<CardItem
					key={v4()}
					img={element.flags.png}
					name={element.name.common}
					population={element.population}
					region={element.region}
					capital={element.capital}
				/>
			))}
		</div>
	);
};

export default Home;
