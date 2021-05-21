import React, { useContext, useEffect, useState } from 'react';

import { WebsiteContext } from 'context/providers/website';
import { ActivityContext } from 'context/providers/activity';
import { getComponentById } from 'library';

import Loader from 'containers/Loader/Loader';

import classes from './Preview.module.scss';

const Preview: React.FC = () => {
	const [active, setActive] = useState<string>();

	const [content, setContent] = useState<JSX.Element[]>();
	const [loading, setLoading] = useState<boolean>(true);

	const { state: stateWebsite } = useContext(WebsiteContext);
	const { state: stateActivity } = useContext(ActivityContext);

	useEffect(() => {
		if ((active != null && stateActivity.activePage == null) || stateActivity.activePage === active) {
			return;
		}

		const activePage = stateActivity.activePage || Object.keys(stateWebsite!.pages)[0];

		if (activePage != null && active !== activePage) {
			setActive(activePage);

			renderComponents(activePage, true);
		}
	}, [stateActivity.activePage]);

	useEffect(() => {
		if (active == null) {
			return;
		}

		renderComponents(active);
	}, [stateWebsite?.pages, stateWebsite?.styles]);

	const renderComponents = async (active: string, load?: boolean) => {
		if (load) {
			setLoading(true);
		}

		const components = stateWebsite!.pages[active].components;

		const newContent = Object.keys(components).map((key) => {
			const bulkComponent = getComponentById(components[key].id);

			const content = components[key].content;
			const styles = stateWebsite!.styles[components[key].id];

			return <bulkComponent.default {...content} styles={styles} key={components[key].id} />;
		});

		setContent(newContent);

		if (load) {
			setLoading(false);
		}
	};

	return <div className={classes.Preview}>{loading ? <Loader /> : content}</div>;
};

export default Preview;
