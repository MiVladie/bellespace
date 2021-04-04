import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import Auth from 'containers/Auth/Auth';

interface Credentials {
	email: string;
	password: string;
}

const SignIn: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false);

	const history = useHistory();

	const submitHandler = ({ email, password }: Credentials) => {
		setLoading(true);

		console.log({ email, password });

		history.push('/projects');
	};

	return <Auth action='login' onSubmit={submitHandler} loading={loading} />;
};

export default SignIn;
