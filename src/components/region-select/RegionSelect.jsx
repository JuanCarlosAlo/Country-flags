import { useEffect } from 'react';
import { REGIONS } from '../../constants/REGIONS';
import { URLS } from '../../constants/URLS';
import { StyledOption, StyledSelect } from './styles';

const RegionSelect = ({ region, setRegion, setUrlToFetch }) => {
	useEffect(() => {
		if (region === '0') {
			return setUrlToFetch(URLS.ALL);
		} else {
			return setUrlToFetch(URLS[region.toUpperCase()]);
		}
	}, [region]);
	return (
		<StyledSelect
			name='region'
			id='region'
			onChange={e => {
				setRegion(e.target.value);
			}}
		>
			<StyledOption value={REGIONS.DEFAULT}>All</StyledOption>
			<StyledOption value={REGIONS.AFRICA}>Africa</StyledOption>
			<StyledOption value={REGIONS.AMERICA}>America</StyledOption>
			<StyledOption value={REGIONS.ASIA}>Asia</StyledOption>
			<StyledOption value={REGIONS.EUROPE}>Europe</StyledOption>
			<StyledOption value={REGIONS.OCEANIA}>Oceania</StyledOption>
		</StyledSelect>
	);
};

export default RegionSelect;
