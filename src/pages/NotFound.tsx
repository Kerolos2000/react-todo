import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Section } from 'mui-plus-components';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'src/enums';

export interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = () => {
	const { palette } = useTheme();
	const navigate = useNavigate();

	return (
		<Section
			sectionID='not-found'
			sx={{
				alignItems: 'center',
				display: 'flex',
				justifyContent: 'center',
				overflow: 'hidden',
				position: 'relative',
				textAlign: 'center',
			}}
		>
			<Stack
				alignItems='center'
				spacing={3}
			>
				<Typography
					sx={{
						background: `linear-gradient(90deg, ${palette.secondary.main}, ${palette.primary.main})`,
						backgroundClip: 'text',
						fontSize: { md: '10rem', xs: '7rem' },
						fontWeight: 900,
						letterSpacing: '-0.02em',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					}}
				>
					Oops!
				</Typography>

				<Typography
					sx={{ color: 'text.primary', fontWeight: 700 }}
					variant='h2'
				>
					Page Not Found
				</Typography>

				<Typography
					sx={{ color: 'text.secondary', maxWidth: 550 }}
					variant='body1'
				>
					The page you are looking for does not exist or has been moved.
				</Typography>

				<Button
					onClick={() => navigate(Routes.Home)}
					size='large'
					variant='contained'
				>
					Go Back Home
				</Button>
			</Stack>
		</Section>
	);
};
