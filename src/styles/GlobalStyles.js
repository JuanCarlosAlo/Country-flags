import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/COLORS.JS';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before{
	box-sizing: border-box;
}
ul{
	list-style: none;
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
}
a{
	text-decoration: none;
	color: inherit;
}
img{
	display: block;
	max-width: 100%;
}
body {
	font-family: 'League Spartan', sans-serif;
	background-color: ${COLORS.main};
	margin-left: auto;
	margin-right: auto;
	overflow-x: hidden;
	
	height: 100vh;
}
`;

export { GlobalStyle };
