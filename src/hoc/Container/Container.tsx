import React from 'react';

import classes from './Container.module.scss';

interface Props {
	className?: string;
	children: React.ReactNode;
}

const Container: React.FC<Props> = ({ className, children }) => {
	return <div className={[classes.Container, className].join(' ')}>{children}</div>;
};

export default Container;
