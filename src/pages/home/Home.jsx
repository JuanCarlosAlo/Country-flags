import CardItem from '../../components/card-item/CardItem';
import { useFetch } from '../../hooks/useFetch';

const Home = () => {
	const { data, country, setCountry } = useFetch(
		'https://restcountries.com/v3.1/all'
	);

	console.log(data);
	return (
		<div>
			<header>
				<h1>Where in the world?</h1>
			</header>
			<div>
				<input type='text' />
				<select name='region' id='region'>
					<option value='africa'>Africa</option>
					<option value='america'>America</option>
					<option value='asia'>Asia</option>
					<option value='europe'>Europe</option>
					<option value='oceania'>Oceania</option>
				</select>
			</div>
			{data.map(element => (
				<CardItem
					img={element.flags.png}
					name={element.name.common}
					population={element.population}
				/>
			))}
		</div>
	);
};

export default Home;
