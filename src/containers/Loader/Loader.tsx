import React from 'react';

import Spinner from 'components/ui/Spinner/Spinner';

import classes from './Loader.module.scss';

interface Props {
	className?: string;
	style?: object;
	dark?: boolean;
	size?: number;
}

const Loader: React.FC<Props> = ({ className, style, dark, size = 64 }) => {
	return (
		<div className={[classes.Loader, dark ? classes.Dark : null, className].join(' ')} style={style}>
			<Spinner size={size} dark={!dark} />

			<h1 className={classes.Heading}>
				Loading
				<span className={classes.Dots} />
			</h1>
		</div>
	);
};

export default Loader;
