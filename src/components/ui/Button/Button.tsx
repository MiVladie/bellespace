import React from 'react';

import Spinner from 'components/ui/Spinner/Spinner';

import classes from './Button.module.scss';

interface Props {
	className?: string;
	onClick: () => void;
	loading?: boolean;
	disabled?: boolean;
	children: React.ReactNode;
}

const Button: React.FC<Props> = ({ className, loading, disabled, children, onClick }) => {
	return (
		<button className={[className, classes.Button].join(' ')} onClick={onClick} disabled={disabled || loading}>
			{loading ? <Spinner size={14} /> : children}
		</button>
	);
};

export default Button;
