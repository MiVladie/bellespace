import React from 'react';

import classes from './Container.module.scss';

const Container: React.FC = ({ children }) => {
	return <div className={classes.Container}>{children}</div>;
};

export default Container;
