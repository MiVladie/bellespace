import React, { useContext, useEffect, useState } from 'react';

import { WebsiteContext } from 'context/providers/website';
import { ActivityContext } from 'context/providers/activity';

import classes from './Preview.module.scss';
import { getComponentById } from 'library';

const Preview: React.FC = () => {
	const [active, setActive] = useState<number>();

	const { state: stateWebsite } = useContext(WebsiteContext);
	const { state: stateActivity } = useContext(ActivityContext);

	useEffect(() => {
		const homePage = stateWebsite!.pages[0].id;

		setActive(homePage);
	}, []);

	useEffect(() => {
		const activePage = stateActivity.activePage;

		if (activePage != null) {
			setActive(activePage);
		}
	}, [stateActivity.activePage]);

	const renderComponents = () => {
		if (active == null) {
			return;
		}

		return stateWebsite!.pages
			.find((page) => page.id === active)!
			.components.map((component) => {
				const bulkComponent = getComponentById(component.componentId);

				const content = component.content;
				const styles = stateWebsite!.styles.find((style) => style.componentId === component.componentId)!;

				return <bulkComponent.default {...content} styles={styles.properties} key={component.id} />;
			});
	};

	return <div className={classes.Preview}>{renderComponents()}</div>;
};

export default Preview;
