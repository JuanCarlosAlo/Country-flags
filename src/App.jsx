import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import Router from './router/Router';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Router />
		</BrowserRouter>
	);
};

export default App;
