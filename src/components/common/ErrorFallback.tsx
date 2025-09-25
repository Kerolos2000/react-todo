import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export interface ErrorFallbackProps {
	error?: Error;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
	return (
		<Box
			sx={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				gap: 3,
				height: '100dvh',
				justifyContent: 'center',
				px: 2,
				width: '100%',
			}}
		>
			<Alert
				icon={<ReportProblemIcon />}
				severity='error'
				sx={{ borderRadius: 2, boxShadow: 2, maxWidth: 480, width: '100%' }}
			>
				<AlertTitle>
					<Typography
						sx={{ fontWeight: 'bold' }}
						variant='h6'
					>
						Something went wrong
					</Typography>
				</AlertTitle>
				<Typography
					sx={{ mb: 1 }}
					variant='body2'
				>
					{error?.message || 'An unexpected error occurred. Please try again.'}
				</Typography>
			</Alert>
		</Box>
	);
};
