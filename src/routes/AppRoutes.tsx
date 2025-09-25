import { createBrowserRouter } from 'react-router-dom';
import { Layout } from 'src/layouts';

export const AppRoutes = createBrowserRouter([
	{
		children: [
			{
				index: true,
				async lazy() {
					const { Home } = await import('src/pages');
					return { Component: Home };
				},
			},
		],
		Component: Layout,
		id: 'root',
	},
]);
