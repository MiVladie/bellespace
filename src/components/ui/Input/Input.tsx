import React from 'react';

import classes from './Input.module.scss';

type InputType = 'date' | 'textarea' | 'email' | 'number' | 'password' | 'tel' | 'text' | 'time';

interface Props {
	className?: string;
	name: string;
	type: InputType;
	placeholder: string;
	onChange: (e: string) => void;
	value: string | number;
	label?: string;
	error?: string;
	disabled?: boolean;
	dark?: boolean;
}

const Input: React.FC<Props> = ({
	className,
	name,
	type,
	placeholder,
	onChange,
	value,
	label,
	error,
	disabled,
	dark
}) => {
	console.log({ className });

	switch (type) {
		case 'textarea':
			return (
				<div className={className}>
					{label && (
						<label className={classes.Label} htmlFor={name}>
							{label}
						</label>
					)}
					<textarea
						name={name}
						className={[classes.Textarea, dark ? classes.Dark : null, error ? classes.Error : null].join(
							' '
						)}
						style={label ? { width: '100%', padding: 0 } : {}}
						placeholder={placeholder}
						onChange={(e) => e.target.value}
						value={value}
						disabled={disabled}
					/>
					{error && <small className={classes.Message}>{error}</small>}
				</div>
			);

		default:
			return (
				<div className={className}>
					{label && (
						<label className={classes.Label} htmlFor={name}>
							{label}
						</label>
					)}
					<input
						name={name}
						className={[classes.Input, dark ? classes.Dark : null, error ? classes.Error : null].join(' ')}
						style={label ? { width: '100%', padding: 0 } : {}}
						placeholder={placeholder}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
						value={value}
						disabled={disabled}
					/>
					{error && <small className={classes.Message}>{error}</small>}
				</div>
			);
	}
};

export default Input;
