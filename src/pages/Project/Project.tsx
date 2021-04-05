import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import Sitemap from 'components/Sitemap/Sitemap';
import Sidebar from 'containers/Sidebar/Sidebar';

import classes from './Project.module.scss';

type Module = 'page' | 'component';

type Action = 'new' | 'content' | 'styles' | 'delete' | 'settings';

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

	const [module, setModule] = useState<Module | null>(null);
	const [action, setAction] = useState<Action | null>(null);

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

			if (prevState === id) {
				setModule(null);
				setAction(null);

				return null;
			} else {
				setModule('page');
				setAction('content');

				return id;
			}
		});
	};

	const componentClickHandler = (id: number) => {
		setSelectedComponent((prevState) => {
			if (prevState === id) {
				setModule('page');
				setAction('content');

				return null;
			} else {
				setModule('component');
				setAction('content');

				return id;
			}
		});
	};

	const newPageHandler = () => {
		setModule('page');
		setAction('new');

		setSelectedPage(null);
	};

	const newComponentHandler = () => {
		setModule('component');
		setAction('new');

		setSelectedComponent(null);
	};

	const selectActionHandler = (type: Action) => {
		setAction(type);
	};

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

			<Sidebar
				visible={!!module && !!action}
				module={module}
				action={action}
				onSelectAction={selectActionHandler}
			/>
		</div>
	);
};

export default Project;
