import React, { useContext } from 'react';

import { ActivityContext } from 'context/providers/activity';
import { WebsiteContext } from 'context/providers/website';

import { Action as ActivityAction } from 'context/actions/activity';

import { WEBSITE_CATEGORIES } from 'constants/website';
import { AddRounded } from '@mui/icons-material';

import Accordion from 'components/ui/Accordion/Accordion';
import Sidebar from 'hoc/Sidebar/Sidebar';

import classes from './Sitemap.module.scss';

interface Props {
	readOnly?: boolean;
}

const getCategory = (id: number): string => {
	const category = WEBSITE_CATEGORIES.find((category) => category.value === id);

	if (!category) {
		throw new Error('Could not find a category!');
	}

	return category.label;
};

const Sitemap: React.FC<Props> = ({ readOnly }) => {
	const { state: stateActivity, dispatch: dispatchActivity } = useContext(ActivityContext);
	const { state: stateWebsite } = useContext(WebsiteContext);

	const selectPageHandler = (id: string) => {
		if (stateActivity.activePage === id) {
			dispatchActivity({ type: ActivityAction.DELETE_ACTIVE_PAGE });
		} else {
			dispatchActivity({ type: ActivityAction.SET_ACTIVE_PAGE, payload: { activePage: id } });
		}
	};

	const selectNewPageHandler = () => {
		dispatchActivity({ type: ActivityAction.SET_NEW_PAGE, payload: { newPage: !stateActivity.newPage } });
	};

	const selectComponentHandler = (id: string) => {
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
				{Object.keys(stateWebsite!.pages).map((pKey) => (
					<li
						className={[classes.Page, pKey === stateActivity.activePage ? classes.SelectedPage : null].join(
							' '
						)}
						key={pKey}>
						<div className={classes.Wrapper} onClick={() => selectPageHandler(pKey)}>
							<h2 className={classes.Title}>{stateWebsite!.pages[pKey].name}</h2>

							<span className={classes.Indicator} />
						</div>

						<Accordion className={classes.Components} expanded={pKey === stateActivity.activePage}>
							{Object.keys(stateWebsite!.pages[pKey].components).map((cKey) => (
								<div
									className={[
										classes.Component,
										cKey === stateActivity.activeComponent ? classes.SelectedComponent : null
									].join(' ')}
									onClick={() => selectComponentHandler(cKey)}
									key={cKey}>
									<h3 className={classes.Name}>{stateWebsite!.pages[pKey].components[cKey].name}</h3>
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
