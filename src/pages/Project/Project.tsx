import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import Sitemap from 'components/Sitemap/Sitemap';

import classes from './Project.module.scss';

interface Params {
	id: string;
}

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

const Project: React.FC = () => {
	const [sitemap, setSitemap] = useState<Page[]>([]);
	const [selectedPage, setSelectedPage] = useState<number | null>(null);
	const [selectedComponent, setSelectedComponent] = useState<number | null>(null);

	const { id } = useParams<Params>();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const sampleSitemap: Page[] = [
			{
				id: 1,
				name: 'Home',
				url: '/',
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
				name: 'About',
				url: '/about',
				components: [
					{
						id: 1,
						name: 'Banner'
					}
				]
			}
		];

		setSitemap(sampleSitemap);
	};

	const pageClickHandler = (id: number) => {
		setSelectedPage((prevState) => {
			setSelectedComponent(null);

			return prevState === id ? null : id;
		});
	};

	const componentClickHandler = (id: number) => {
		setSelectedComponent((prevState) => (prevState === id ? null : id));
	};

	const newPageHandler = () => {};

	const newComponentHandler = (pageId: number) => {};

	return (
		<div className={classes.Project}>
			<Sitemap
				data={sitemap}
				name='Ashk Aesthetics'
				category='Beauty Salon'
				selectedPage={selectedPage}
				selectedComponent={selectedComponent}
				onPageClick={pageClickHandler}
				onComponentClick={componentClickHandler}
				onNewPage={newPageHandler}
				onNewComponent={newComponentHandler}
			/>
		</div>
	);
};

export default Project;
