const CardItem = ({ img, name, population }) => {
	return (
		<div>
			<img src={img} alt='' />
			<p>{name}</p>
			<p>{population}</p>
		</div>
	);
};

export default CardItem;
