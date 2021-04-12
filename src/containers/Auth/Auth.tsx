import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Input from 'components/ui/Input/Input';
import Button from 'components/ui/Button/Button';
import Checkbox from 'components/ui/Checkbox/Checkbox';

import classes from './Auth.module.scss';

interface InputError {
	email: string | null;
	password: string | null;
	confirmPassword: string | null;
}

interface Props {
	type: 'signin' | 'signup';
	onSubmit: (data: object) => void;
	loading: boolean;
	message?: string;
}

const Auth: React.FC<Props> = ({ type, onSubmit, loading, message }) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [agree, setAgree] = useState<boolean>(false);

	const [error, setError] = useState<InputError>({ email: null, password: null, confirmPassword: null });

	const submitHandler = async () => {
		if (hasErrors()) {
			return;
		}

		if (type === 'signin') {
			onSubmit({ email, password });
		} else {
			onSubmit({ email, password, confirmPassword });
		}
	};

	const hasErrors = (): boolean => {
		let errorsFound = false;

		if (email.trim().length === 0) {
			setError((prevState) => ({ ...prevState, email: 'This field is required!' }));
			errorsFound = true;
		}

		if (password.trim().length === 0) {
			setError((prevState) => ({ ...prevState, password: 'This field is required!' }));
			errorsFound = true;
		}

		if (type === 'signup') {
			if (confirmPassword.trim().length === 0) {
				setError((prevState) => ({ ...prevState, confirmPassword: 'This field is required!' }));
				errorsFound = true;
			}

			if (confirmPassword.trim().length === 0) {
				setError((prevState) => ({ ...prevState, confirmPassword: 'This field is required!' }));
				errorsFound = true;
			}

			if (password !== confirmPassword) {
				setError((prevState) => ({ ...prevState, confirmPassword: 'Passwords do not match!' }));
				errorsFound = true;
			}
		}

		return errorsFound;
	};

	return (
		<div className={classes.Auth}>
			<div className={classes.Actions}>
				<div className={classes.Wrapper}>
					<h1 className={classes.Heading}>{type === 'signin' ? 'Sign In' : 'Sign Up'}</h1>
					<div className={classes.Line} />

					<form className={classes.Form} onSubmit={(e) => e.preventDefault()}>
						<Input
							className={classes.Input}
							name='email'
							placeholder='Your Email..'
							type='email'
							onChange={setEmail}
							onFocus={() => setError((prevState) => ({ ...prevState, email: null }))}
							value={email}
							error={error.email}
							dark
						/>
						<Input
							className={classes.Input}
							name='password'
							placeholder='Your Password..'
							type='password'
							onChange={setPassword}
							onFocus={() => setError((prevState) => ({ ...prevState, password: null }))}
							value={password}
							error={error.password}
							dark
						/>
						{type === 'signup' && (
							<Input
								className={classes.Input}
								name='confirmPassword'
								placeholder='Confirm Password..'
								type='password'
								onChange={setConfirmPassword}
								onFocus={() => setError((prevState) => ({ ...prevState, confirmPassword: null }))}
								value={confirmPassword}
								error={error.confirmPassword}
								dark
							/>
						)}
						{message && <p className={classes.Message}>{message}</p>}

						{type === 'signup' && (
							<Checkbox
								className={classes.Legal}
								name='agree'
								onChange={setAgree}
								value={agree}
								dark
								label={
									<span>
										I agree to the <Link to='/terms-and-conditions'>Terms & Conditions</Link> and{' '}
										<Link to='/privacy-policy'>Privacy Policy</Link>
									</span>
								}
							/>
						)}

						<Button
							className={classes.Button}
							onClick={submitHandler}
							loading={loading}
							dark
							filled
							rounded>
							{type === 'signin' ? 'Login' : 'Register'}
						</Button>

						<Link className={classes.Redirect} to={type === 'signin' ? '/sign-up' : '/sign-in'}>
							{type === 'signin' ? "I don't have an account" : 'I already have an account'}
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

export default Auth;
