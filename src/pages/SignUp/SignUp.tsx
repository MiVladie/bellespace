import React, { useState } from 'react';

import Auth from 'containers/Auth/Auth';

interface Credentials {
	email: string;
	password: string;
	confirmPassword: string;
	agree: boolean;
}

const SignUp: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false);

	const submitHandler = ({ email, password, confirmPassword, agree }: Credentials) => {
		setLoading(true);

		console.log({ email, password, confirmPassword, agree });
	};

	return <Auth action='register' onSubmit={submitHandler} loading={loading} />;
};

export default SignUp;
