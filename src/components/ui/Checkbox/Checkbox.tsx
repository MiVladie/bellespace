import React from 'react';

import classes from './Checkbox.module.scss';

interface Props {
	className?: string;
	name: string;
	value: boolean;
	onChange: (e: boolean) => void;
	onFocus?: () => void;
	error?: string | null;
	label?: string | React.ReactNode;
	dark?: boolean;
	disabled?: boolean;
}

const Checkbox: React.FC<Props> = ({ className, name, value, onChange, onFocus, error, label, dark, disabled }) => {
	return (
		<>
			<div
				className={[classes.Wrapper, dark ? classes.Dark : null, error ? classes.Error : null, className].join(
					' '
				)}>
				<input
					id={name}
					className={classes.Checkbox}
					type='checkbox'
					value={value ? 1 : 0}
					onChange={(e) => !disabled && onChange(e.target.checked)}
					onFocus={onFocus}
					disabled={disabled}
				/>

				<label htmlFor={name}>{label}</label>

				{error && <small className={classes.Message}>{error}</small>}
			</div>
		</>
	);
};

export default Checkbox;
