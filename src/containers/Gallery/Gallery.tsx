import React from 'react';

import Project from 'components/Project/Project';

import classes from './Gallery.module.scss';

interface ProjectFields {
	id: number;
	name: string;
	url: string;
}

interface Props {
	data: ProjectFields[];
	onClick: (id: number) => void;
	dark?: boolean;
}

const Gallery: React.FC<Props> = ({ data, onClick, dark }) => {
	return (
		<div className={classes.Gallery}>
			{data.map((project) => (
				<Project
					key={project.id}
					id={project.id}
					name={project.name}
					url={project.url}
					onClick={onClick}
					dark={dark}
				/>
			))}
		</div>
	);
};

export default Gallery;
