import React from 'react';

import classes from './Tooltip.module.scss';

interface Props {
	className: string;
	children: React.ReactNode;
	dark?: boolean;
}

const Tooltip: React.FC<Props> = ({ className, dark, children }) => {
	return (
		<div className={[classes.Tooltip, dark ? classes.Dark : null, className].join(' ')}>
			<div className={classes.Arrow} />
			<p className={classes.Description}>{children}</p>
		</div>
	);
};

export default Tooltip;
