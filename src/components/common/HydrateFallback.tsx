import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export interface HydrateFallbackProps {}

export const HydrateFallback: React.FC<HydrateFallbackProps> = () => {
	return (
		<Box
			sx={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				height: '100dvh',
				justifyContent: 'center',
			}}
		>
			<CircularProgress size={60} />
			<Typography
				sx={{ fontWeight: 'bold' }}
				variant='h4'
			>
				Loading...
			</Typography>
		</Box>
	);
};
