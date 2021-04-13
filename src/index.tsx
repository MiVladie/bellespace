import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from 'context/providers/auth';

import App from './App';

ReactDOM.render(
	<Router basename={process.env.PUBLIC_URL}>
		<AuthProvider>
			<App />
		</AuthProvider>
	</Router>,
	document.getElementById('root')
);
