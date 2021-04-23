import React from 'react';

import { IField } from 'interfaces';
import { HelpOutline } from '@material-ui/icons';

import Tooltip from '../Tooltip/Tooltip';

import classes from './Input.module.scss';

interface Props extends IField {
	className?: string;
	onChange: (e: string) => void;
	onFocus?: () => void;
	onBlur?: () => void;
	value: string | number;
	step?: number;
	min?: number;
	max?: number;
	error?: string | null;
	disabled?: boolean;
	autoComplete?: boolean;
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
	step,
	min,
	max,
	info,
	prefix,
	label,
	error,
	disabled,
	autoComplete,
	dark
}) => {
	const onInputBlur = () => {
		if (type === 'number') {
			let result = value;

			if (min && +value < min) {
				result = min.toString();
			}

			if (max && +value > max) {
				result = max.toString();
			}

			if (step) {
				let inv = 1.0 / step;

				result = (Math.round(+value * inv) / inv).toString();
			}

			onChange(result.toString());
		}

		onBlur?.();
	};

	let content: React.ReactNode = null;

	switch (type) {
		case 'textarea':
			content = (
				<textarea
					name={name}
					className={[classes.Textarea, dark ? classes.Dark : null, error ? classes.Error : null].join(' ')}
					style={label || prefix ? { width: '100%', padding: 0 } : {}}
					placeholder={placeholder}
					onChange={(e) => onChange(e.target.value)}
					onFocus={onFocus}
					onBlur={onBlur}
					value={value}
					disabled={disabled}
				/>
			);
			break;

		default:
			content = (
				<input
					name={name}
					className={classes.Input}
					style={label || prefix ? { width: '100%', padding: 0 } : {}}
					placeholder={placeholder}
					type={type}
					onChange={(e) => onChange(e.target.value)}
					onFocus={onFocus}
					onBlur={onInputBlur}
					value={value}
					step={step}
					min={min}
					max={max}
					disabled={disabled}
					autoComplete={autoComplete ? 'on' : 'off'}
				/>
			);
			break;
	}

	return (
		<div className={[classes.Main, className].join(' ')}>
			{label && (
				<label className={classes.Label} htmlFor={name}>
					{label}
					{info && (
						<span className={classes.Info}>
							<HelpOutline />

							<Tooltip className={classes.Tooltip} dark={dark}>
								{info}
							</Tooltip>
						</span>
					)}
				</label>
			)}
			<div className={[classes.Wrapper, dark ? classes.Dark : null, error ? classes.Error : null].join(' ')}>
				{prefix && <span className={classes.Prefix}>{prefix}</span>}
				{content}
			</div>
			{error && <small className={classes.Message}>{error}</small>}
		</div>
	);
};

export default Input;
