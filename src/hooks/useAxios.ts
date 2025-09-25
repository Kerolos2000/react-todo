import baseAxios from 'axios';
import { VITE_API_URL } from 'src/constants';

export const useAxios = () => {
	const axios = baseAxios.create({
		baseURL: VITE_API_URL,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return axios;
};
