import { createBrowserRouter } from 'react-router-dom';
import { HydrateFallback } from 'src/components';
import { Routes } from 'src/enums';
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
			{
				async lazy() {
					const { NotFound } = await import('src/pages');
					return { Component: NotFound };
				},
				path: Routes.NotFound,
			},
		],
		Component: Layout,
		HydrateFallback,
		id: 'root',
	},
]);
