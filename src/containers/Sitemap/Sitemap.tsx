import React, { useState, useContext } from 'react';

import { ActivityContext } from 'context/providers/activity';
import { Action } from 'context/actions/activity';
import { AddRounded } from '@material-ui/icons';
import { IPage } from 'interfaces';

import Sidebar from 'hoc/Sidebar/Sidebar';

import classes from './Sitemap.module.scss';

interface Props {
	readOnly?: boolean;
}

const data: { name: string; category: string; pages: IPage[] } = {
	name: 'Ashk Aesthetics',
	category: 'Beauty Salon',
	pages: [
		{
			id: 1,
			title: 'Home',
			components: [
				{
					id: 1,
					name: 'Banner'
				},
				{
					id: 2,
					name: 'Interstitial'
				}
			]
		},
		{
			id: 2,
			title: 'About',
			components: [
				{
					id: 3,
					name: 'Banner'
				}
			]
		}
	]
};

const Sitemap: React.FC<Props> = ({ readOnly }) => {
	const { state, dispatch } = useContext(ActivityContext);

	const selectPageHandler = (id: number) => {
		if (state.activePage === id) {
			dispatch({ type: Action.DELETE_ACTIVE_PAGE });
		} else {
			dispatch({ type: Action.SET_ACTIVE_PAGE, payload: { activePage: id } });
		}
	};

	const selectNewPageHandler = () => {
		dispatch({ type: Action.SET_NEW_PAGE, payload: { newPage: !state.newPage } });
	};

	const selectComponentHandler = (id: number) => {
		if (state.activeComponent === id) {
			dispatch({ type: Action.DELETE_ACTIVE_COMPONENT });
		} else {
			dispatch({ type: Action.SET_ACTIVE_COMPONENT, payload: { activeComponent: id } });
		}
	};

	const selectNewComponentHandler = () => {
		dispatch({ type: Action.SET_NEW_COMPONENT, payload: { newComponent: !state.newComponent } });
	};

	return (
		<Sidebar className={classes.Sitemap}>
			<div className={classes.Info}>
				<div className={classes.Logo} />

				<div className={classes.Description}>
					<h1 className={classes.Heading}>{data.name}</h1>
					<p className={classes.Category}>{data.category}</p>
				</div>

				<div className={classes.Line} />
			</div>

			<ul className={classes.Pages}>
				{data.pages.map((page) => (
					<li
						className={[classes.Page, page.id === state.activePage ? classes.SelectedPage : null].join(' ')}
						key={page.id}>
						<div className={classes.Wrapper} onClick={() => selectPageHandler(page.id)}>
							<h2 className={classes.Title}>{page.title}</h2>

							<span className={classes.Indicator} />
						</div>

						<div className={classes.Components}>
							{page.components.map((component) => (
								<div
									className={[
										classes.Component,
										component.id === state.activeComponent ? classes.SelectedComponent : null
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
										state.newComponent ? classes.SelectedNewComponent : null
									].join(' ')}
									onClick={selectNewComponentHandler}>
									<h3 className={classes.Name}>
										<AddRounded className={classes.Icon} />
										New Component
									</h3>
								</div>
							)}
						</div>
					</li>
				))}

				{!readOnly && (
					<li
						className={[classes.New, state.newPage ? classes.SelectedNewPage : null].join(' ')}
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
