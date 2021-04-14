import React from 'react';

import classes from './Project.module.scss';

interface Props {
	name: string;
	src: any;
	className?: string;
	onClick?: () => void;
	dark?: boolean;
}

const Project: React.FC<Props> = ({ className, name, src, onClick, dark }) => (
	<div className={[classes.Project, dark ? classes.Dark : null, className].join(' ')} onClick={onClick}>
		<h3 className={classes.Name}>{name}</h3>

		<div className={classes.Placeholder}>
			<img className={classes.Image} src={src} alt={name} />
		</div>
	</div>
);

export default Project;
