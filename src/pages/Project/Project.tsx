import React, { useContext, useEffect } from 'react';

import { ActivityContext } from 'context/providers/activity';
import { Action } from 'context/actions/activity';

import Sitemap from 'containers/Sitemap/Sitemap';
import Explorer from 'containers/Explorer/Explorer';

import classes from './Project.module.scss';

const Project: React.FC = () => {
	const { dispatch } = useContext(ActivityContext);

	useEffect(() => {
		resetState();
	}, []);

	const resetState = () => {
		dispatch({ type: Action.DELETE_ACTIVE_PAGE });
		dispatch({ type: Action.SET_NEW_PAGE, payload: { newPage: false } });
	};

	return (
		<div className={classes.Project}>
			<Sitemap />
			<Explorer />
		</div>
	);
};

export default Project;
