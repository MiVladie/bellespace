import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from 'hoc/Layout/Layout';

import SignIn from 'pages/SignIn/SignIn';
import SignUp from 'pages/SignUp/SignUp';

const App: React.FC = () => {
	return (
		<Layout>
			<Route
				render={({ location }) => (
					<Switch location={location}>
						<Redirect exact path='/' to='/sign-in' />
						<Route path='/sign-in' exact component={SignIn} />
						<Route path='/sign-up' exact component={SignUp} />
					</Switch>
				)}
			/>
		</Layout>
	);
};

export default App;
