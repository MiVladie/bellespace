import React from 'react';

import Sitemap from 'containers/Sitemap/Sitemap';
import Explorer from 'containers/Explorer/Explorer';

import classes from './Project.module.scss';

const Project: React.FC = () => {
	return (
		<div className={classes.Project}>
			<Sitemap />
			<Explorer />
		</div>
	);
};

export default Project;
