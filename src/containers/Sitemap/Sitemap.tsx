import React from 'react';

import { AddRounded } from '@material-ui/icons';
import { IPage } from 'interfaces';

import classes from './Sitemap.module.scss';

interface Props {
	readOnly?: boolean;
}

const Sitemap: React.FC<Props> = ({ readOnly }) => {
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

	return (
		<div className={classes.Sitemap}>
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
					<li className={classes.Page} key={page.id}>
						<h2 className={classes.Title}>{page.title}</h2>
						<span className={classes.Indicator} />

						{page.components.map((component) => (
							<div className={classes.Component} key={component.id}>
								<h3 className={classes.Name}>{component.name}</h3>
							</div>
						))}

						{!readOnly && (
							<div className={classes.Component}>
								<h3 className={classes.Name}>
									<AddRounded className={classes.Icon} />
									New Component
								</h3>
							</div>
						)}
					</li>
				))}

				{!readOnly && (
					<li className={classes.Page}>
						<h2 className={classes.Title}>
							<AddRounded className={classes.Icon} />
							New Page
						</h2>
					</li>
				)}
			</ul>

			<span className={classes.Toggle} />
		</div>
	);
};

export default Sitemap;
