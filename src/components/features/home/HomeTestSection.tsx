import Typography from '@mui/material/Typography';
import { Section } from 'mui-plus-components';

export interface HomeTestSectionProps {}

export const HomeTestSection: React.FC<HomeTestSectionProps> = () => {
	return (
		<Section sectionID='home-test-section'>
			<Typography>This is a test section</Typography>
		</Section>
	);
};
