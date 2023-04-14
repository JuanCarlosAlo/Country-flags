const CardItem = ({ img, name, population, region, capital }) => {
	return (
		<div>
			<img src={img} alt='' />
			<p>{name}</p>
			<p>Population: {population}</p>
			<p>Region: {region}</p>
			<p>Capital: {capital}</p>
		</div>
	);
};

export default CardItem;
