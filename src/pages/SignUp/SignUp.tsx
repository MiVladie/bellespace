import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import Auth from 'containers/Auth/Auth';

interface Credentials {
	email: string;
	password: string;
	confirmPassword: string;
	agree: boolean;
}

const SignUp: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false);

	const history = useHistory();

	const submitHandler = async ({ email, password, confirmPassword, agree }: Credentials) => {
		setLoading(true);

		console.log({ email, password, confirmPassword, agree });

		await new Promise((resolve) => setTimeout(resolve, 1500));

		history.push('/projects');
	};

	return <Auth action='register' onSubmit={submitHandler} loading={loading} />;
};

export default SignUp;
