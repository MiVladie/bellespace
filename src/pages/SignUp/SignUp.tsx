import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Container from 'hoc/Container/Container';
import Input from 'components/ui/Input/Input';
import Button from 'components/ui/Button/Button';

import classes from './SignUp.module.scss';
import Checkbox from 'components/ui/Checkbox/Checkbox';

const SignUp: React.FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [agree, setAgree] = useState<boolean>(false);

	const onSubmitHandler = async () => {
		console.log({ email, password, confirmPassword, agree });

		return;
	};

	return (
		<div className={classes.SignIn}>
			<Container className={classes.Actions}>
				<div className={classes.Wrapper}>
					<div className={classes.Title}>
						<h1 className={classes.Heading}>Sign Up</h1>

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

					<Button className={classes.Submit} onClick={onSubmitHandler}>
						Register
					</Button>

					<Link className={classes.Redirect} to='/sign-in'>
						I already have an account
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

export default SignUp;
