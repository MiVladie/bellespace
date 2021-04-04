import React from 'react';

import Project from 'components/Project/Project';

import classes from './Gallery.module.scss';

interface ProjectFields {
	id: number;
	name: string;
	url: string | null;
}

interface Props {
	data: ProjectFields[];
	onClick: (id: number) => void;
	onNewClick?: () => void;
	dark?: boolean;
}

const Gallery: React.FC<Props> = ({ data, onClick, onNewClick, dark }) => {
	const list = [...data];

	if (onNewClick) {
		list.push({ id: 0, name: 'Create New Project..', url: null });
	}

	return (
		<div className={classes.Gallery}>
			{list.map((project) => (
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
