import { useEffect } from 'react';

const TextInput = ({ typed, setTyped, setData, data }) => {
	useEffect(() => {
		if (typed === '') {
			return setData(data);
		} else {
			setData(filterCountry([...data], typed));
		}
	}, [typed]);
	return <input onChange={e => setTyped(e.target.value)} type='text' />;
};
const filterCountry = (arr, searchKey) => {
	return arr.filter(obj =>
		Object.keys(obj.name).some(key =>
			obj.name.common.toLowerCase().includes(searchKey)
		)
	);
};
export default TextInput;
