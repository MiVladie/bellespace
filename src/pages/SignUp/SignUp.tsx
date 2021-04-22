import React, { useState, useContext } from 'react';

import { AuthContext } from 'context/providers/auth';
import { ICredentials, IUser } from 'interfaces';
import { useHistory } from 'react-router-dom';
import { Action } from 'context/actions/auth';
import { Helmet } from 'react-helmet';

import Auth from 'containers/Auth/Auth';

const SignUp: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const { dispatch } = useContext(AuthContext);

	const history = useHistory();

	const submitHandler = async (data: ICredentials) => {
		setLoading(true);

		try {
			await new Promise((resolve) => setTimeout(resolve, 1500));

			const user: IUser = {
				id: 1,
				email: data.email,
				name: 'John Doe'
			};

			const token = 'abcd';

			dispatch({ type: Action.SET_AUTH, payload: { user: user, token: token } });

			localStorage.setItem('token', token);

			history.push('/');
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<Helmet>
				<title>Sign Up | Bellespace</title>
			</Helmet>
			<Auth type='signup' onSubmit={submitHandler} loading={loading} message={error} />;
		</>
	);
};

export default SignUp;
