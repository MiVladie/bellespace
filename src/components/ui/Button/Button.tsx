import React from 'react';

import Spinner from 'components/ui/Spinner/Spinner';

import classes from './Button.module.scss';

interface Props {
	className?: string;
	onClick: () => void;
	loading?: boolean;
	disabled?: boolean;
	dark?: boolean;
	rounded?: boolean;
	filled?: boolean;
	children: React.ReactNode;
}

const Button: React.FC<Props> = ({
	className,
	loading,
	dark = false,
	rounded = false,
	filled = true,
	disabled,
	children,
	onClick
}) => {
	return (
		<button
			className={[
				className,
				classes.Button,
				dark ? classes.Dark : '',
				rounded ? classes.Rounded : '',
				filled ? classes.Filled : ''
			].join(' ')}
			onClick={onClick}
			disabled={disabled || loading}>
			{loading ? <Spinner size={14} /> : children}
		</button>
	);
};

export default Button;
