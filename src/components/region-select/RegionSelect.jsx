import { useEffect } from 'react';
import { REGIONS } from '../../constants/REGIONS';
import { URLS } from '../../constants/URLS';

const RegionSelect = ({
	region,
	setRegion,
	setUrlToFetch,
	setSearch,
	search
}) => {
	useEffect(() => {
		if (region === 0) setUrlToFetch(URLS.ALL);
		else setUrlToFetch(URLS[region.toUpperCase()]);
	}, [search]);
	return (
		<select
			name='region'
			id='region'
			onChange={e => {
				setRegion(e.target.value);
				setSearch(true);
			}}
		>
			<option value={REGIONS.DEFAULT}>All</option>
			<option value={REGIONS.AFRICA}>Africa</option>
			<option value={REGIONS.AMERICA}>America</option>
			<option value={REGIONS.ASIA}>Asia</option>
			<option value={REGIONS.EUROPE}>Europe</option>
			<option value={REGIONS.OCEANIA}>Oceania</option>
		</select>
	);
};

export default RegionSelect;
