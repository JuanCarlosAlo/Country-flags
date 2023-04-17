import { useEffect } from 'react';
import { URLS } from '../../constants/URLS';
import { StyledInputText } from './styles';

const TextInput = ({ typed, setTyped, setUrlToFetch, region }) => {
	useEffect(() => {
		if (typed === '') {
			return setUrlToFetch(URLS[region.toUpperCase()]);
		} else {
			setUrlToFetch(URLS.COUNTRIE + typed);
		}
	}, [typed]);
	return (
		<StyledInputText
			onChange={e => setTyped(e.target.value)}
			type='text'
			placeholder='Search for a country…'
		/>
	);
};

export default TextInput;
