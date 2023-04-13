import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Details from '../pages/details/Details';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='country/:countryId' element={<Details />} />
		</Routes>
	);
};

export default Router;
