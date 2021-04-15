import React from 'react';

import classes from './Project.module.scss';

interface Props {
	name: string;
	src?: string;
	icon?: any;
	className?: string;
	onClick?: () => void;
	dark?: boolean;
}

const Project: React.FC<Props> = ({ className, name, src, icon, onClick, dark }) => (
	<div className={[classes.Project, dark ? classes.Dark : null, className].join(' ')} onClick={onClick}>
		<h3 className={classes.Name}>{name}</h3>

		<div className={classes.Placeholder}>
			{icon ? (
				React.cloneElement(icon, { className: classes.Icon })
			) : (
				<img className={classes.Image} src={src} alt={name} />
			)}
		</div>
	</div>
);

export default Project;
