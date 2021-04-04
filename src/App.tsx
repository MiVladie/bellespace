import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from 'hoc/Layout/Layout';

import SignIn from 'pages/SignIn/SignIn';
import SignUp from 'pages/SignUp/SignUp';
import Projects from 'pages/Projects/Projects';
import Project from 'pages/Project/Project';

const App: React.FC = () => {
	return (
		<Layout>
			<Route
				render={({ location }) => (
					<Switch location={location}>
						<Redirect exact path='/' to='/sign-in' />
						<Route path='/sign-in' exact component={SignIn} />
						<Route path='/sign-up' exact component={SignUp} />
						<Route path='/projects' exact component={Projects} />
						<Route path='/projects/:id' exact component={Project} />
					</Switch>
				)}
			/>
		</Layout>
	);
};

export default App;
