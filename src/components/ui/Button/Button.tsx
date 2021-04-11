import React from 'react';
import Spinner from '../Spinner/Spinner';

import classes from './Button.module.scss';

interface Props {
	children: React.ReactNode;
	onClick: () => void;
	className?: string;
	loading?: boolean;
	disabled?: boolean;
	dark?: boolean;
	filled?: boolean;
	rounded?: boolean;
}

const Button: React.FC<Props> = ({ children, onClick, className, loading, disabled, dark, filled, rounded }) => (
	<button
		className={[
			classes.Button,
			dark ? classes.Dark : null,
			filled ? classes.Filled : null,
			rounded ? classes.Rounded : null,
			className
		].join(' ')}
		onClick={onClick}
		disabled={disabled || loading}>
		{loading ? <Spinner size={14} dark={(dark && !filled) || (!dark && filled)} /> : children}
	</button>
);

export default Button;
