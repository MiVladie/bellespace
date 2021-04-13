import React from 'react';

import classes from './Projects.module.scss';

const Projects: React.FC = () => {
	return (
		<div className={classes.Projects}>
			<div className={classes.Selection}>
				<div className={classes.Wrapper}>
					<h1 className={classes.Heading}>Select Your Project..</h1>
					<div className={classes.Line} />

					<div className={classes.Gallery}></div>
				</div>

				<div className={classes.Circle} />
			</div>

			<div className={classes.Library}>
				<div className={classes.Wrapper}>
					<h1 className={classes.Heading}>Or Explore Existing..</h1>
					<div className={classes.Line} />

					<div className={classes.Gallery}></div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
