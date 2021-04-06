import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import Sitemap from 'components/Sitemap/Sitemap';
import Sidebar from 'containers/Sidebar/Sidebar';

import classes from './Project.module.scss';
import Library from 'containers/Library/Library';

enum Type {
	NEW_PAGE,
	NEW_COMPONENT,
	MODIFY_PAGE,
	MODIFY_COMPONENT,
	DELETE_PAGE,
	DELETE_COMPONENT
}

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

/*

	** Website structure: **


	// Pages

	[
		{
			id: number;
			name: string;
			url: string;
			components: [componentId: number, ...]
		},
		...
	]

	// Components

	[
		{
			id: number;
			name: string;
			styleId: number;
			content: {
				name: string;
				...
			}
		},
		...
	]

	// Styles

	[
		{
			id: number;
			styles: {
				main: {
					fontFamily: string;
				},
				meta: {
					fontSize: number;
				}
			}
		},
		...
	]

*/

const Project: React.FC = () => {
	const [pages, setPages] = useState<Page[]>([]);
	const [components, setComponents] = useState<Page[]>([]);

	const [selectedPage, setSelectedPage] = useState<number | null>(null);
	const [selectedComponent, setSelectedComponent] = useState<number | null>(null);

	const [type, setType] = useState<Type | null>(null);

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

		setPages(sampleSitemap);
	};

	const pageClickHandler = (id: number) => {
		setSelectedPage((prevState) => {
			setSelectedComponent(null);

			if (prevState === id) {
				setType(null);

				return null;
			} else {
				setType(Type.MODIFY_PAGE);

				return id;
			}
		});
	};

	const componentClickHandler = (id: number) => {
		setSelectedComponent((prevState) => {
			if (prevState === id) {
				setType(Type.MODIFY_PAGE);

				return null;
			} else {
				setType(Type.MODIFY_COMPONENT);

				return id;
			}
		});
	};

	const newPageHandler = () => {
		setType(Type.NEW_PAGE);

		setSelectedPage(null);
	};

	const newComponentHandler = () => {
		setType(Type.NEW_COMPONENT);

		setSelectedComponent(null);
	};

	return (
		<div className={classes.Project}>
			<Sitemap
				data={pages}
				name='Ashk Aesthetics'
				category='Beauty Salon'
				selectedPage={selectedPage}
				selectedComponent={selectedComponent}
				onPageClick={pageClickHandler}
				onComponentClick={componentClickHandler}
				onNewPage={newPageHandler}
				onNewComponent={newComponentHandler}
			/>

			<Sidebar visible={type != null} type={type} />
		</div>
	);
};

export default Project;
