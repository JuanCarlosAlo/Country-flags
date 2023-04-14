import { useEffect } from 'react';
import { REGIONS } from '../../constants/REGIONS';
import { URLS } from '../../constants/URLS';

const RegionSelect = ({ region, setRegion, setUrlToFetch }) => {
	useEffect(() => {
		if (region === '0') {
			return setUrlToFetch(URLS.ALL);
		} else {
			return setUrlToFetch(URLS[region.toUpperCase()]);
		}
	}, [region]);
	return (
		<select
			name='region'
			id='region'
			onChange={e => {
				setRegion(e.target.value);
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
