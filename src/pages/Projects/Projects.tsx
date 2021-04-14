import React, { useEffect, useState } from 'react';

import { IProject } from 'interfaces';

import Gallery from 'containers/Gallery/Gallery';

import classes from './Projects.module.scss';

const Projects: React.FC = () => {
	const [selection, setSelection] = useState<IProject[]>([]);
	const [library, setLibrary] = useState<IProject[]>([]);

	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | undefined>();

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
				}
			];

			const libraryData: IProject[] = [
				{
					id: 2,
					name: 'Beaty at Luxx',
					src: 'https://letscomit.com/static/media/beautyatluxx.4b733042.png	'
				},
				{
					id: 3,
					name: 'Shergill Design',
					src: 'https://letscomit.com/static/media/shergilldesign.572ab0f8.png'
				},
				{
					id: 4,
					name: 'Beaute',
					src: 'https://letscomit.com/static/media/beaute.aa6a607d.png'
				},
				{
					id: 5,
					name: 'Lookin Foxxy',
					src: 'https://letscomit.com/static/media/lookinfoxxy.4e7f3cc6.png'
				}
			];

			setSelection(selectionData);
			setLibrary(libraryData);

			setLoading(false);
		} catch (error) {
			setError(error);

			setLoading(false);
		}
	};

	return (
		<div className={classes.Projects}>
			<div className={classes.Selection}>
				<div className={classes.Wrapper}>
					<h1 className={classes.Heading}>Select Your Project..</h1>
					<div className={classes.Line} />

					<div className={classes.Gallery}>
						<Gallery data={selection} onClick={console.log} onNew={() => console.log('new')} />
					</div>
				</div>

				<div className={classes.Circle} />
			</div>

			<div className={classes.Library}>
				<div className={classes.Wrapper}>
					<h1 className={classes.Heading}>Or Explore Existing</h1>
					<div className={classes.Line} />

					<div className={classes.Gallery}>
						<Gallery data={library} onClick={console.log} dark />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
