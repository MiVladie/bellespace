import React, { useContext, useEffect, useState } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from 'context/providers/auth';
import { Action } from 'context/actions/auth';
import { Helmet } from 'react-helmet';
import { IUser } from 'interfaces/auth';

import Layout from 'hoc/Layout/Layout';

import SignIn from 'pages/SignIn/SignIn';
import SignUp from 'pages/SignUp/SignUp';
import Projects from 'pages/Projects/Projects';
import Project from 'pages/Project/Project';

import Loader from 'containers/Loader/Loader';

const App: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(true);

	const { state, dispatch } = useContext(AuthContext);

	useEffect(() => {
		authenticate();
	}, []);

	const authenticate = async () => {
		const token = localStorage.getItem('token');

		if (!token) {
			setLoading(false);
			return;
		}

		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));

			const user: IUser = {
				id: 1,
				email: 'johndoe@mail.com',
				name: 'John Doe'
			};

			const token = 'abcd';

			dispatch({ type: Action.SET_AUTH, payload: { user: user, token: token } });

			setLoading(false);
		} catch (error) {
			console.error(error);

			setLoading(false);
		}
	};

	if (loading) {
		return <Loader style={{ height: '100vh' }} dark />;
	}

	return (
		<Layout>
			<Helmet>
				<title>Bellespace</title>
			</Helmet>

			<Route
				render={({ location }) => {
					if (state.user) {
						return (
							<Switch location={location}>
								<Redirect exact path='/' to='/projects' />

								<Route path='/projects' exact component={Projects} />
								<Route path='/projects/:id' exact component={Project} />

								<Redirect to='/projects' />
							</Switch>
						);
					}

					return (
						<Switch location={location}>
							<Redirect exact path='/' to='/sign-in' />

							<Route path='/sign-in' exact component={SignIn} />
							<Route path='/sign-up' exact component={SignUp} />

							<Redirect to='/sign-in' />
						</Switch>
					);
				}}
			/>
		</Layout>
	);
};

export default App;
