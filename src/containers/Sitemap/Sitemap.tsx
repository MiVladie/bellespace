import React, { useState } from 'react';

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
	const [selectedPage, setSelectedPage] = useState<number | null>(null);
	const [selectedComponent, setSelectedComponent] = useState<number | null>(null);

	const [selectedNewPage, setSelectedNewPage] = useState<boolean>(false);
	const [selectedNewComponent, setSelectedNewComponent] = useState<boolean>(false);

	const selectPageHandler = (id: number) => {
		setSelectedComponent(null);
		setSelectedNewComponent(false);

		if (selectedPage === id) {
			setSelectedPage(null);
		} else {
			setSelectedNewPage(false);
			setSelectedPage(id);
		}
	};

	const selectNewPageHandler = () => {
		if (selectedNewPage) {
			setSelectedNewPage(false);
		} else {
			setSelectedPage(null);
			setSelectedNewPage(true);
		}
	};

	const selectComponentHandler = (id: number) => {
		if (selectedComponent === id) {
			setSelectedComponent(null);
		} else {
			setSelectedNewComponent(false);
			setSelectedComponent(id);
		}
	};

	const selectNewComponentHandler = () => {
		if (selectedNewComponent) {
			setSelectedNewComponent(false);
		} else {
			setSelectedComponent(null);
			setSelectedNewComponent(true);
		}
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
						className={[classes.Page, page.id === selectedPage ? classes.SelectedPage : null].join(' ')}
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
										component.id === selectedComponent ? classes.SelectedComponent : null
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
										selectedNewComponent ? classes.SelectedNewComponent : null
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
						className={[classes.New, selectedNewPage ? classes.SelectedNewPage : null].join(' ')}
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
