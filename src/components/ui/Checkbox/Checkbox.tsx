import React from 'react';

import classes from './Checkbox.module.scss';

interface Props {
	className?: string;
	name: string;
	value: boolean;
	onChange: (e: boolean) => void;
	label?: string | React.ReactNode;
	dark?: boolean;
	disabled?: boolean;
}

const Checkbox: React.FC<Props> = ({ className, name, value, onChange, label, dark, disabled }) => {
	return (
		<div className={[classes.Wrapper, dark ? classes.Dark : '', className].join(' ')}>
			<input
				id={name}
				className={classes.Checkbox}
				type='checkbox'
				value={value ? 1 : 0}
				onChange={(e) => !disabled && onChange(e.target.checked)}
				disabled={disabled}
			/>

			<label htmlFor={name}>{label}</label>
		</div>
	);
};

export default Checkbox;
