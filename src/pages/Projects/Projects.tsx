import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { IProject } from 'interfaces';
import { Helmet } from 'react-helmet';

import Gallery from 'containers/Gallery/Gallery';
import Pagination from 'components/Pagination/Pagination';

import classes from './Projects.module.scss';

const Projects: React.FC = () => {
	const [selection, setSelection] = useState<IProject[]>([]);
	const [library, setLibrary] = useState<IProject[]>([]);

	const [selectionPage, setSelectionPage] = useState<number>(1);
	const [libraryPage, setLibraryPage] = useState<number>(1);

	const [loading, setLoading] = useState<boolean>(true);
	const [_, setError] = useState<string | undefined>();

	const history = useHistory();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		setLoading(true);

		try {
			const selectionData: IProject[] = [
				{
					id: 1,
					name: 'Ashk Aesthetics',
					src: 'https://letscomit.com/static/media/ashkaesthetics.30c66f5e.png'
				},
				{
					id: 2,
					name: 'Journey Planner',
					src: 'https://letscomit.com/static/media/journeyplanner.a57769c9.png'
				},
				{
					id: 3,
					name: 'Lakeroad',
					src: 'https://letscomit.com/static/media/lakeroad.285e4bf7.png'
				}
			];

			const libraryData: IProject[] = [
				{
					id: 4,
					name: 'Beaty at Luxx',
					src: 'https://letscomit.com/static/media/beautyatluxx.4b733042.png	'
				},
				{
					id: 5,
					name: 'Shergill Design',
					src: 'https://letscomit.com/static/media/shergilldesign.572ab0f8.png'
				},
				{
					id: 6,
					name: 'Beaute',
					src: 'https://letscomit.com/static/media/beaute.aa6a607d.png'
				},
				{
					id: 7,
					name: 'Lookin Foxxy',
					src: 'https://letscomit.com/static/media/lookinfoxxy.4e7f3cc6.png'
				}
			];

			await new Promise((resolve) => setTimeout(resolve, 2500));

			setSelection(selectionData);
			setLibrary(libraryData);

			setLoading(false);
		} catch (error) {
			setError(error);

			setLoading(false);
		}
	};

	const projectSelectHandler = (id?: number) => {
		if (id) {
			history.push(`/projects/${id}`);

			return;
		}

		history.push('/projects/new');
	};

	return (
		<div className={classes.Projects}>
			<Helmet>
				<title>Projects | Bellespace</title>
			</Helmet>

			<div className={classes.Selection}>
				<div className={classes.Wrapper}>
					<h1 className={classes.Heading}>Select Your Project..</h1>
					<div className={classes.Line} />

					<div className={classes.Gallery}>
						<Gallery
							data={selection}
							onClick={projectSelectHandler}
							onNew={projectSelectHandler}
							loading={loading}
							number={4}
						/>
					</div>
				</div>

				<Pagination
					className={classes.Pagination}
					pages={4}
					page={selectionPage}
					onClick={setSelectionPage}
					disabled={loading}
				/>

				<div className={classes.Circle} />
			</div>

			<div className={classes.Library}>
				<div className={classes.Wrapper}>
					<h1 className={classes.Heading}>Or Explore Existing</h1>
					<div className={classes.Line} />

					<div className={classes.Gallery}>
						<Gallery data={library} onClick={projectSelectHandler} loading={loading} number={4} dark />
					</div>
				</div>

				<Pagination
					className={classes.Pagination}
					pages={4}
					page={libraryPage}
					onClick={setLibraryPage}
					disabled={loading}
					dark
				/>
			</div>
		</div>
	);
};

export default Projects;
