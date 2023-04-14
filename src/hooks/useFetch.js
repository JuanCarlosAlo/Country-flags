import { useEffect, useState } from 'react';

export const useFetch = url => {
	const [urlToFetch, setUrlToFetch] = useState(url);
	const [data, setData] = useState([]);
	const [search, setSearch] = useState(true);
	useEffect(() => {
		fetchData(urlToFetch, setData, setSearch, search);
	}, [urlToFetch]);

	return { data, setUrlToFetch, search, setSearch };
};

const fetchData = async (url, setData, setSearch, search) => {
	const request = await fetch(url);
	const data = await request.json();
	setData(data);
	console.log(data);
	setSearch(!search);
};
