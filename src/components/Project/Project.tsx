import React from 'react';

import classes from './Project.module.scss';

interface Props {
	id: number;
	name: string;
	url: string | null;
	onClick: (id: number) => void;
	dark?: boolean;
}

const Project: React.FC<Props> = ({ id, name, url, onClick, dark }) => {
	return (
		<div className={[classes.Project, dark ? classes.Dark : ''].join(' ')} onClick={() => onClick(id)}>
			<h4 className={classes.Label}>{name}</h4>

			<div className={classes.Holder}>
				{url ? (
					<img className={classes.Image} src={url} alt={name} />
				) : (
					<div className={classes.Icon}>
						<div />
						<div />
					</div>
				)}
			</div>
		</div>
	);
};

export default Project;
