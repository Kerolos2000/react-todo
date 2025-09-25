import Box from '@mui/material/Box';
import { ScrollToTopButton } from 'mui-plus-components';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = () => {
	const navigationType = useNavigationType();
	const { hash, pathname, search } = useLocation();
	useEffect(() => {
		if (navigationType === 'PUSH' && !hash) {
			window.scrollTo({ behavior: 'smooth', top: 0 });
		}
	}, [hash, pathname, search]);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				flexGrow: 1,
				justifyContent: 'space-between',
				minHeight: '100dvh',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexGrow: 1,
					width: '100%',
				}}
			>
				<Outlet />
				<ScrollToTopButton />
			</Box>
		</Box>
	);
};
