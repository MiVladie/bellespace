import React from 'react';

import { IProject } from 'interfaces';

import Project from 'components/Project/Project';

import classes from './Gallery.module.scss';

interface Props {
	data: IProject[];
	onClick: (id: number) => void;
	onNew?: () => void;
	dark?: boolean;
}

const Gallery: React.FC<Props> = ({ data, onClick, onNew, dark }) => {
	return (
		<div className={classes.Gallery}>
			{data.map((project) => (
				<Project
					className={classes.Project}
					key={project.id || project.name}
					name={project.name}
					src={project.src}
					onClick={() => onClick(project.id)}
					dark={dark}
				/>
			))}
		</div>
	);
};

export default Gallery;
