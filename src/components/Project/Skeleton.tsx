import React from 'react';

import Skeleton from 'components/ui/Skeleton/Skeleton';

import classes from './Project.module.scss';

interface Props {
	className?: string;
	dark?: boolean;
}

const ProjectSkeleton: React.FC<Props> = ({ className, dark }) => (
	<div className={[classes.Project, dark ? classes.Dark : null, className].join(' ')}>
		<h3 className={classes.Name}>
			<Skeleton dark={dark} />
		</h3>

		<div className={classes.Placeholder}>
			<Skeleton className={classes.Image} dark={dark} />
		</div>
	</div>
);

export default ProjectSkeleton;
