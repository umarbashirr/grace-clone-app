import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopNavbar } from '../components';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<TopNavbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
