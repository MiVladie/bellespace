import React from 'react';

import classes from './Input.module.scss';

type InputType = 'date' | 'textarea' | 'email' | 'number' | 'password' | 'tel' | 'text' | 'time';

interface Props {
	className?: string;
	name: string;
	type: InputType;
	placeholder: string;
	onChange: (e: string) => void;
	onFocus?: () => void;
	onBlur?: () => void;
	value: string | number;
	prefix?: string;
	label?: string;
	error?: string | null;
	disabled?: boolean;
	dark?: boolean;
}

const Input: React.FC<Props> = ({
	className,
	name,
	type,
	placeholder,
	onChange,
	onFocus,
	onBlur,
	value,
	prefix,
	label,
	error,
	disabled,
	dark
}) => {
	switch (type) {
		case 'textarea':
			return (
				<div className={[classes.Main, className].join(' ')}>
					{label && (
						<label className={classes.Label} htmlFor={name}>
							{label}
						</label>
					)}
					<div
						className={[classes.Wrapper, dark ? classes.Dark : null, error ? classes.Error : null].join(
							' '
						)}>
						{prefix && <span className={classes.Prefix}>{prefix}</span>}
						<textarea
							name={name}
							className={[
								classes.Textarea,
								dark ? classes.Dark : null,
								error ? classes.Error : null
							].join(' ')}
							style={label || prefix ? { width: '100%', padding: 0 } : {}}
							placeholder={placeholder}
							onChange={(e) => onChange(e.target.value)}
							onFocus={onFocus}
							onBlur={onBlur}
							value={value}
							disabled={disabled}
						/>
					</div>
					{error && <small className={classes.Message}>{error}</small>}
				</div>
			);

		default:
			return (
				<div className={[classes.Main, className].join(' ')}>
					{label && (
						<label className={classes.Label} htmlFor={name}>
							{label}
						</label>
					)}
					<div
						className={[classes.Wrapper, dark ? classes.Dark : null, error ? classes.Error : null].join(
							' '
						)}>
						{prefix && <span className={classes.Prefix}>{prefix}</span>}
						<input
							name={name}
							className={classes.Input}
							style={label || prefix ? { width: '100%', padding: 0 } : {}}
							placeholder={placeholder}
							type={type}
							onChange={(e) => onChange(e.target.value)}
							onFocus={onFocus}
							onBlur={onBlur}
							value={value}
							disabled={disabled}
						/>
					</div>
					{error && <small className={classes.Message}>{error}</small>}
				</div>
			);
	}
};

export default Input;