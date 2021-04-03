import React from 'react';

import classes from './Input.module.scss';

type InputType = 'date' | 'textarea' | 'email' | 'number' | 'password' | 'tel' | 'text' | 'time';

interface Props {
	name: string;
	type: InputType;
	placeholder: string;
	onChange: (e: string) => void;
	value: string | number;
	disabled?: boolean;
}

const Input: React.FC<Props> = ({ name, type, placeholder, onChange, value, disabled }): JSX.Element => {
	switch (type) {
		case 'textarea':
			return (
				<textarea
					name={name}
					className={classes.Textarea}
					placeholder={placeholder}
					onChange={(e) => e.target.value}
					value={value}
					disabled={disabled}
				/>
			);

		default:
			return (
				<input
					name={name}
					className={classes.Input}
					placeholder={placeholder}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
					value={value}
					disabled={disabled}
				/>
			);
	}
};

export default Input;
