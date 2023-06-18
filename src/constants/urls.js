import { REGIONS } from './REGIONS';

const BASE = 'https://restcountries.com/v3.1/';

export const URLS = {
	ALL: `${BASE}all`,
	AFRICA: `${BASE}region/${REGIONS.AFRICA}`,
	ASIA: `${BASE}region/${REGIONS.ASIA}`,
	AMERICA: `${BASE}region/${REGIONS.AMERICA}`,
	EUROPE: `${BASE}region/${REGIONS.EUROPE}`,
	OCEANIA: `${BASE}region/${REGIONS.OCEANIA}`,
	COUNTRIE: `${BASE}alpha/`,
	TYPED: `${BASE}name/`
};
