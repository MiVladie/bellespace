import React from 'react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import classes from './Project.module.scss';

interface Props {
	className?: string;
	dark?: boolean;
}

const ProjectSkeleton: React.FC<Props> = ({ className, dark }) => (
	<SkeletonTheme color={dark ? '#bdc3c7' : '#34495e'} highlightColor={dark ? '#ecf0f1' : '#6b7884'}>
		<div className={[classes.Project, dark ? classes.Dark : null, className].join(' ')}>
			<h3 className={classes.Name}>
				<Skeleton />
			</h3>

			<div className={classes.Placeholder}>
				<Skeleton className={classes.Image} />
			</div>
		</div>
	</SkeletonTheme>
);

export default ProjectSkeleton;
