import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import { UserProvider } from 'context/providers/user';

import App from './App';

ReactDOM.render(
	<Router basename={process.env.PUBLIC_URL}>
		<UserProvider>
			<App />
		</UserProvider>
	</Router>,
	document.getElementById('root')
);
