import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Details from '../pages/details/Details';
import Layout from '../layout/Layout';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />

				<Route path='/country/:countryId' element={<Details />} />
			</Route>
		</Routes>
	);
};

export default Router;
