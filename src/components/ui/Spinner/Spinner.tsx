import React from 'react';

import classes from './Spinner.module.scss';

interface Props {
	size?: string;
}

const Spinner: React.FC<Props> = ({ size = '80px' }) => {
	return (
		<div style={{ width: size, height: size }} className={classes.Spinner}>
			Spinner
		</div>
	);
};

export default Spinner;
