import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Layout from 'hoc/Layout/Layout';

import SignIn from 'pages/SignIn/SignIn';

const App: React.FC = () => {
	return (
		<Layout>
			<Route
				render={({ location }) => (
					<Switch location={location}>
						<Route path='/' exact component={SignIn} />
					</Switch>
				)}
			/>
		</Layout>
	);
};

export default App;
