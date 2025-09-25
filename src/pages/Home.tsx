import { Page } from 'mui-plus-components';
import { HomeTestSection } from 'src/components';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	return (
		<Page title='Home'>
			<HomeTestSection />
		</Page>
	);
};
