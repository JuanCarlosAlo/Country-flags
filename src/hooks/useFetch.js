import { useEffect, useState } from 'react';

export const useFetch = url => {
	const [data, setData] = useState([]);
	const [search, setSearch] = useState(true);
	const [urlToFetch, setUrlToFetch] = useState(url);
	const [allData, setAllData] = useState([]);
	useEffect(() => {
		fetchData(urlToFetch, setData);
	}, [urlToFetch]);
	console.log(data);
	return { data, setUrlToFetch, setData, allData, setAllData };
};

const fetchData = async (urlToFetch, setData) => {
	const request = await fetch(urlToFetch);
	const data = await request.json();
	setData(data);
};
