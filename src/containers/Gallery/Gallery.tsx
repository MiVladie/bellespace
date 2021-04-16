import React from 'react';

import { IProject } from 'interfaces';
import { AddRounded } from '@material-ui/icons';

import Project from 'components/Project/Project';

import classes from './Gallery.module.scss';
import Skeleton from 'components/Project/Skeleton';

interface Props {
	data: IProject[];
	onClick: (id: number) => void;
	onNew?: () => void;
	number?: number;
	loading?: boolean;
	dark?: boolean;
}

const Gallery: React.FC<Props> = ({ data, onClick, onNew, number = 3, loading, dark }) => {
	return (
		<div className={classes.Gallery}>
			{loading
				? new Array(number).fill(undefined).map((_, index) => <Skeleton key={index} dark={dark} />)
				: data.map((project) => (
						<Project
							className={classes.Project}
							key={project.id || project.name}
							name={project.name}
							src={project.src}
							onClick={() => onClick(project.id)}
							dark={dark}
						/>
				  ))}

			{onNew && !loading && <Project name='Create New Project..' icon={<AddRounded />} onClick={() => onNew()} />}
		</div>
	);
};

export default Gallery;
