import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Container from 'hoc/Container/Container';
import Input from 'components/ui/Input/Input';
import Button from 'components/ui/Button/Button';
import Checkbox from 'components/ui/Checkbox/Checkbox';

import classes from './Auth.module.scss';

interface Props {
	action: 'login' | 'register';
	onSubmit: (e: any) => void;
	loading: boolean;
}

const Auth: React.FC<Props> = ({ action, onSubmit, loading }) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [agree, setAgree] = useState<boolean>(false);

	const onSubmitHandler = async () => {
		if (action === 'login') {
			onSubmit({ email, password });
		} else if (action === 'register') {
			onSubmit({ email, password, confirmPassword, agree });
		}

		return;
	};

	const signUpWrapper = (
		<div className={classes.Wrapper}>
			<div className={classes.Title}>
				<h1 className={classes.Heading}>{action === 'login' ? 'Sign In' : 'Sign Up'}</h1>

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
				<Input
					name='confirmPassword'
					type='password'
					placeholder='Confirm password..'
					onChange={setConfirmPassword}
					value={confirmPassword}
				/>
			</form>

			<Checkbox
				className={classes.Legal}
				name='agree'
				onChange={setAgree}
				value={agree}
				label={
					<span>
						I agree to the <Link to='/terms-and-conditions'>Terms & Conditions</Link> and{' '}
						<Link to='/privacy-policy'>Privacy Policy</Link>
					</span>
				}
			/>

			<Button className={classes.Submit} onClick={onSubmitHandler} loading={loading} dark rounded>
				Register
			</Button>

			<Link className={classes.Redirect} to='/sign-in'>
				I already have an account
			</Link>
		</div>
	);

	const signInWrapper = (
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

			<Button className={classes.Submit} onClick={onSubmitHandler} loading={loading} dark rounded>
				Login
			</Button>

			<Link className={classes.Redirect} to='/sign-up'>
				I am a new user
			</Link>
		</div>
	);

	return (
		<div className={classes.Auth}>
			<Container className={classes.Actions}>{action === 'login' ? signInWrapper : signUpWrapper}</Container>

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

export default Auth;
