import React, { useContext, useEffect, useState } from 'react';

import { WebsiteContext } from 'context/providers/website';
import { ActivityContext } from 'context/providers/activity';
import { getComponentById } from 'library';

import Loader from 'containers/Loader/Loader';

import classes from './Preview.module.scss';

const Preview: React.FC = () => {
	const [active, setActive] = useState<number>();

	const [content, setContent] = useState<JSX.Element[]>();
	const [loading, setLoading] = useState<boolean>(true);

	const { state: stateWebsite } = useContext(WebsiteContext);
	const { state: stateActivity } = useContext(ActivityContext);

	useEffect(() => {
		if ((active != null && stateActivity.activePage == null) || stateActivity.activePage === active) {
			return;
		}

		const activePage = stateActivity.activePage || stateWebsite!.pages[0].id;

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

	const renderComponents = async (active: number, load?: boolean) => {
		if (load) {
			setLoading(true);
		}

		const newContent = stateWebsite!.pages
			.find((page) => page.id === active)!
			.components.map((component) => {
				const bulkComponent = getComponentById(component.componentId);

				const content = component.content;
				const styles = stateWebsite!.styles.find((style) => style.componentId === component.componentId)!;

				return <bulkComponent.default {...content} styles={styles.properties} key={component.id} />;
			});

		setContent(newContent);

		if (load) {
			setLoading(false);
		}
	};

	return <div className={classes.Preview}>{loading ? <Loader /> : content}</div>;
};

export default Preview;
