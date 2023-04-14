import { v4 } from 'uuid';
import CardItem from '../../components/card-item/CardItem';
import { useFetch } from '../../hooks/useFetch';
import TextInput from '../../components/text-input/TextInput';
import RegionSelect from '../../components/region-select/RegionSelect';
import { useState } from 'react';
import { URLS } from '../../constants/URLS';

const Home = () => {
	const [region, setRegion] = useState(0);
	const [typed, setTyped] = useState('');
	const { data, setUrlToFetch, search, setSearch } = useFetch(`${URLS.ALL}`);

	return (
		<div>
			<div>
				<TextInput />
				<RegionSelect
					region={region}
					setRegion={setRegion}
					setUrlToFetch={setUrlToFetch}
					setSearch={setSearch}
					search={search}
				/>
			</div>
			{!search ? (
				data.map(element => (
					<CardItem
						key={v4()}
						img={element.flags.png}
						name={element.name.common}
						population={element.population}
						region={element.region}
						capital={element.capital}
					/>
				))
			) : (
				<h1>Loading</h1>
			)}
		</div>
	);
};

export default Home;
