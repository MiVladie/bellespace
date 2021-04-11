import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Input from 'components/ui/Input/Input';
import Button from 'components/ui/Button/Button';

import classes from './SignIn.module.scss';

const SignIn: React.FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const submitHandler = async () => {
		setLoading(true);

		console.log({ email, password });
	};

	return (
		<div className={classes.SignIn}>
			<div className={classes.Actions}>
				<div className={classes.Wrapper}>
					<h1 className={classes.Heading}>Sign In</h1>
					<div className={classes.Line} />

					<form className={classes.Form} onSubmit={(e) => e.preventDefault()}>
						<Input
							className={classes.Input}
							name='email'
							placeholder='Your Email..'
							type='email'
							onChange={setEmail}
							value={email}
							dark
						/>
						<Input
							className={classes.Input}
							name='password'
							placeholder='Your Password..'
							type='password'
							onChange={setPassword}
							value={password}
							dark
						/>
						{error && <p className={classes.Error}>{error}</p>}

						<Button
							className={classes.Button}
							onClick={submitHandler}
							loading={loading}
							dark
							filled
							rounded>
							Login
						</Button>

						<Link className={classes.Redirect} to='/sign-up'>
							I am a new user
						</Link>
					</form>
				</div>
			</div>

			<div className={classes.Info}>
				<div className={classes.Wrapper}>
					<h1 className={classes.Heading}>Bellespace</h1>
					<div className={classes.Line} />
					<p className={classes.Description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat lorem auctor, pretium
						dolor eu, convallis tortor. Vestibulum mattis condimentum lectus vel pretium. Morbi eget
						accumsan ante. Nullam ut varius risus. Phasellus quam nisl, sollicitudin sit amet scelerisque
						at, facilisis nec dolor. Integer porttitor venenatis dolor id malesuada.
					</p>
				</div>

				<small className={classes.Extra}>
					Powered by{' '}
					<a className={classes.Link} href='https://letscomit.com/' target='__blank'>
						letscomit
					</a>
				</small>

				<div className={classes.Circle} />
			</div>
		</div>
	);
};

export default SignIn;
