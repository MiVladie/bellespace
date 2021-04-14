import React from 'react';

import classes from './Project.module.scss';

interface Props {
	id?: number;
	name: string;
	src: any;
	onClick?: (id?: number) => void;
	dark?: boolean;
}

const Project: React.FC<Props> = ({ id, name, src, onClick, dark }) => (
	<div className={[classes.Project, dark ? classes.Dark : null].join(' ')} onClick={() => onClick && onClick(id)}>
		<h3 className={classes.Name}>{name}</h3>

		<div className={classes.Placeholder}>
			<img className={classes.Image} src={src} alt={name} />
		</div>
	</div>
);

export default Project;
