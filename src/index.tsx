import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'context/providers/auth';
import { ActivityProvider } from 'context/providers/activity';
import { WebsiteProvider } from 'context/providers/website';

import App from './App';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
	<Router basename={process.env.PUBLIC_URL}>
		<AuthProvider>
			<ActivityProvider>
				<WebsiteProvider>
					<App />
				</WebsiteProvider>
			</ActivityProvider>
		</AuthProvider>
	</Router>,
	document.getElementById('root')
);

serviceWorkerRegistration.register();
