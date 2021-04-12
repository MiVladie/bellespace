import React, { useState } from 'react';

import Auth from 'containers/Auth/Auth';

const SignUp: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const submitHandler = async (data: object) => {
		setLoading(true);

		console.log(data);
	};

	return <Auth type='signup' onSubmit={submitHandler} loading={loading} message={error} />;
};

export default SignUp;
