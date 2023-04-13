import { useEffect, useState } from 'react';

export const useFetch = url => {
	const [data, setData] = useState([]);
	const [country, setCountry] = useState(false);
	useEffect(() => {
		fetchData(url, setData);
	}, []);

	return { data, country, setCountry, fetchData };
};

const fetchData = async (url, setData) => {
	const request = await fetch(url);
	const data = await request.json();
	setData(data);
};
