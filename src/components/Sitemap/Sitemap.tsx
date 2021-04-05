import React, { useState } from 'react';

import { AddRounded } from '@material-ui/icons';

import classes from './Sitemap.module.scss';

interface Component {
	id: number;
	name: string;
}

interface Page {
	id: number;
	name: string;
	url: string;
	components: Component[];
}

interface Props {
	data: Page[];
	name: string;
	category: string;
	selectedPage: number | null;
	selectedComponent: number | null;
	onPageClick: (id: number) => void;
	onComponentClick: (id: number) => void;
	onNewPage?: () => void;
	onNewComponent?: () => void;
}

const Sitemap: React.FC<Props> = ({
	data,
	name,
	category,
	selectedPage,
	selectedComponent,
	onPageClick,
	onComponentClick,
	onNewPage,
	onNewComponent
}) => {
	const [expanded, setExpanded] = useState<boolean>(false);

	return (
		<div className={[classes.Sitemap, expanded ? classes.Expanded : ''].join(' ')}>
			<div className={classes.Info}>
				<div className={classes.Holder} />

				<h1 className={classes.Name}>{name}</h1>

				<p className={classes.Category}>{category}</p>

				<div className={classes.Line} />
			</div>

			<ul className={classes.Pages}>
				{data.map((page) => (
					<li
						key={page.id}
						className={[classes.Page, selectedPage === page.id ? classes.SelectedPage : ''].join(' ')}>
						<div className={classes.Item} onClick={() => onPageClick(page.id)}>
							<p className={classes.Name}>{page.name}</p>
							<div className={classes.Indicator} />
						</div>

						{selectedPage === page.id && (
							<div className={classes.Content}>
								{page.components.map((component) => (
									<div
										key={component.id}
										className={[
											classes.Component,
											selectedComponent === component.id ? classes.SelectedComponent : ''
										].join(' ')}
										onClick={() => onComponentClick(component.id)}>
										<p className={classes.Title}>{component.name}</p>
									</div>
								))}

								{onNewComponent && (
									<div className={classes.Component} onClick={onNewComponent}>
										<AddRounded className={classes.Icon} />
										<p className={classes.Title}>New Component</p>
									</div>
								)}
							</div>
						)}
					</li>
				))}

				{onNewPage && (
					<li className={[classes.Page, classes.NewPage].join(' ')}>
						<div className={classes.Item} onClick={onNewPage}>
							<AddRounded className={classes.Icon} />
							<p className={classes.Name}>New Page</p>
						</div>
					</li>
				)}
			</ul>

			<div
				className={classes.Toggle}
				onClick={() => window.screen.width >= 720 && setExpanded((prevState) => !prevState)}>
				<div className={classes.Icon} />
			</div>
		</div>
	);
};

export default Sitemap;
