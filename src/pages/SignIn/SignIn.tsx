import React, { useState } from 'react';

import Auth from 'containers/Auth/Auth';

interface Credentials {
	email: string;
	password: string;
}

const SignIn: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false);

	const submitHandler = ({ email, password }: Credentials) => {
		setLoading(true);

		console.log({ email, password });
	};

	return <Auth action='login' onSubmit={submitHandler} loading={loading} />;
};

export default SignIn;
