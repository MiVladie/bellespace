import React from 'react';

import classes from './Skeleton.module.scss';

interface Props {
	className?: string;
	dark?: boolean;
}

const Skeleton: React.FC<Props> = ({ className, dark }) => {
	return (
		<span className={[classes.Skeleton, !dark ? classes.Dark : null].join(' ')}>
			<span className={[classes.Indicator, className].join(' ')}>&zwnj;</span>
		</span>
	);
};

export default Skeleton;
