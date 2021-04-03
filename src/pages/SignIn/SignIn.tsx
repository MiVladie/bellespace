import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Container from 'hoc/Container/Container';
import Input from 'components/ui/Input/Input';
import Button from 'components/ui/Button/Button';

import classes from './SignIn.module.scss';

const SignIn: React.FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const onSubmitHandler = async () => {
		console.log({ email, password });

		return;
	};

	return (
		<div className={classes.SignIn}>
			<Container className={classes.Actions}>
				<div className={classes.Wrapper}>
					<div className={classes.Title}>
						<h1 className={classes.Heading}>Sign In</h1>

						<div className={classes.Line} />
					</div>

					<form className={classes.Form}>
						<Input name='email' type='email' placeholder='Your email..' onChange={setEmail} value={email} />
						<Input
							name='password'
							type='password'
							placeholder='Your password..'
							onChange={setPassword}
							value={password}
						/>
					</form>

					<p className={classes.Legal}>
						I agree to the <Link to='/terms-and-conditions'>Terms & Conditions</Link> and{' '}
						<Link to='/privacy-policy'>Privacy Policy</Link>
					</p>

					<Button className={classes.Submit} onClick={onSubmitHandler}>
						Login
					</Button>

					<Link className={classes.Redirect} to='/sign-up'>
						I am a new user
					</Link>
				</div>
			</Container>

			<div className={classes.Info}>
				<Container>
					<div className={classes.Wrapper}>
						<div className={classes.Title}>
							<h1 className={classes.Heading}>Bellespace</h1>

							<div className={classes.Line} />
						</div>

						<p className={classes.Text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat lorem auctor,
							pretium dolor eu, convallis tortor. Vestibulum mattis condimentum lectus vel pretium. Morbi
							eget accumsan ante. Nullam ut varius risus. Phasellus quam nisl, sollicitudin sit amet
							scelerisque at, facilisis nec dolor. Integer porttitor venenatis dolor id malesuada.
						</p>

						<p className={classes.Extra}>
							Powered by{' '}
							<a href='https://letscomit.com/' target='__blank'>
								letscomit
							</a>
						</p>
					</div>
				</Container>

				<div className={classes.Circle} />
			</div>
		</div>
	);
};

export default SignIn;
