import React, { useContext } from 'react';

import { ActivityContext } from 'context/providers/activity';
import { WebsiteContext } from 'context/providers/website';

import { Action as ActivityAction } from 'context/actions/activity';

import { CATEGORIES } from 'constants/website';
import { AddRounded } from '@material-ui/icons';

import Accordion from 'components/ui/Accordion/Accordion';
import Sidebar from 'hoc/Sidebar/Sidebar';

import classes from './Sitemap.module.scss';

interface Props {
	readOnly?: boolean;
}

const getCategory = (id: number): string => {
	const category = CATEGORIES.find((category) => category.value === id);

	if (!category) {
		throw new Error('Could not find a category!');
	}

	return category.label;
};

const Sitemap: React.FC<Props> = ({ readOnly }) => {
	const { state: stateActivity, dispatch: dispatchActivity } = useContext(ActivityContext);
	const { state: stateWebsite } = useContext(WebsiteContext);

	const selectPageHandler = (id: number) => {
		if (stateActivity.activePage === id) {
			dispatchActivity({ type: ActivityAction.DELETE_ACTIVE_PAGE });
		} else {
			dispatchActivity({ type: ActivityAction.SET_ACTIVE_PAGE, payload: { activePage: id } });
		}
	};

	const selectNewPageHandler = () => {
		dispatchActivity({ type: ActivityAction.SET_NEW_PAGE, payload: { newPage: !stateActivity.newPage } });
	};

	const selectComponentHandler = (id: number) => {
		if (stateActivity.activeComponent === id) {
			dispatchActivity({ type: ActivityAction.DELETE_ACTIVE_COMPONENT });
		} else {
			dispatchActivity({ type: ActivityAction.SET_ACTIVE_COMPONENT, payload: { activeComponent: id } });
		}
	};

	const selectNewComponentHandler = () => {
		dispatchActivity({
			type: ActivityAction.SET_NEW_COMPONENT,
			payload: { newComponent: !stateActivity.newComponent }
		});
	};

	console.log('re-render');

	return (
		<Sidebar className={classes.Sitemap}>
			<div className={classes.Info}>
				<div className={classes.Logo} />

				<div className={classes.Description}>
					<h1 className={classes.Heading}>{stateWebsite!.name}</h1>
					<p className={classes.Category}>{getCategory(stateWebsite!.category)}</p>
				</div>

				<div className={classes.Line} />
			</div>

			<ul className={classes.Pages}>
				{stateWebsite!.pages.map((page) => (
					<li
						className={[
							classes.Page,
							page.id === stateActivity.activePage ? classes.SelectedPage : null
						].join(' ')}
						key={page.id}>
						<div className={classes.Wrapper} onClick={() => selectPageHandler(page.id)}>
							<h2 className={classes.Title}>{page.name}</h2>

							<span className={classes.Indicator} />
						</div>

						<Accordion className={classes.Components} expanded={page.id === stateActivity.activePage}>
							{page.components.map((component) => (
								<div
									className={[
										classes.Component,
										component.id === stateActivity.activeComponent
											? classes.SelectedComponent
											: null
									].join(' ')}
									onClick={() => selectComponentHandler(component.id)}
									key={component.id}>
									<h3 className={classes.Name}>{component.name}</h3>
								</div>
							))}

							{!readOnly && (
								<div
									className={[
										classes.Component,
										classes.NewComponent,
										stateActivity.newComponent ? classes.SelectedNewComponent : null
									].join(' ')}
									onClick={selectNewComponentHandler}>
									<h3 className={classes.Name}>
										<AddRounded className={classes.Icon} />
										New Component
									</h3>
								</div>
							)}
						</Accordion>
					</li>
				))}

				{!readOnly && (
					<li
						className={[classes.New, stateActivity.newPage ? classes.SelectedNewPage : null].join(' ')}
						onClick={selectNewPageHandler}>
						<h2 className={classes.Title}>
							<AddRounded className={classes.Icon} />
							New Page
						</h2>
					</li>
				)}
			</ul>
		</Sidebar>
	);
};

export default Sitemap;
