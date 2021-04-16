import React from 'react';

import Sitemap from 'containers/Sitemap/Sitemap';

import classes from './Project.module.scss';

const Project: React.FC = () => {
	return (
		<div className={classes.Project}>
			<Sitemap />
		</div>
	);
};

export default Project;
