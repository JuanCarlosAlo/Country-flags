import { useEffect } from 'react';
import { URLS } from '../../constants/urls';
import { StyledInputText } from './styles';

const TextInput = ({ typed, setTyped, setUrlToFetch, region }) => {
	useEffect(() => {
		if (typed === '') {
			return setUrlToFetch(URLS[region.toUpperCase()]);
		} else {
			setUrlToFetch(URLS.TYPED + typed);
		}
	}, [typed]);
	return (
		<StyledInputText
			onChange={e => {
				if (e.target.value !== ' ') {
					setTyped(e.target.value);
				} else {
					return;
				}
			}}
			type='text'
			placeholder='Search for a country…'
		/>
	);
};

export default TextInput;
