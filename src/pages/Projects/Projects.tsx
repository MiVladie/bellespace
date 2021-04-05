import React from 'react';

import { useHistory } from 'react-router-dom';

import Container from 'hoc/Container/Container';
import Gallery from 'containers/Gallery/Gallery';

import classes from './Projects.module.scss';

const library = [
	{
		id: 1,
		name: 'Ashk Aesthetics',
		url: 'https://letscomit.com/static/media/ashkaesthetics.30c66f5e.png'
	}
];

const catalogue = [
	{
		id: 2,
		name: 'Beauty at Luxx',
		url: 'https://letscomit.com/static/media/beautyatluxx.4b733042.png	'
	},
	{
		id: 3,
		name: 'Shergill Design',
		url: 'https://letscomit.com/static/media/shergilldesign.572ab0f8.png'
	},
	{
		id: 4,
		name: 'Beaute',
		url: 'https://letscomit.com/static/media/beaute.aa6a607d.png'
	},
	{
		id: 5,
		name: 'Lookin Foxxy',
		url: 'https://letscomit.com/static/media/lookinfoxxy.4e7f3cc6.png'
	}
];

const Projects: React.FC = () => {
	const history = useHistory();

	return (
		<div className={classes.Projects}>
			<div className={classes.Library}>
				<Container>
					<div className={classes.Wrapper}>
						<div className={classes.Title}>
							<h1 className={classes.Heading}>Select your project..</h1>

							<div className={classes.Line} />
						</div>

						<div className={classes.Content}>
							<Gallery
								data={library}
								onClick={(id) => history.push(`/projects/${id}`)}
								onNewClick={() => history.push('/projects/new')}
							/>
						</div>

						<p className={classes.Extra}>
							Powered by{' '}
							<a href='https://letscomit.com/' target='__blank'>
								letscomit
							</a>
						</p>
					</div>
				</Container>

				<div className={classes.Circle} />
			</div>

			<div className={classes.Catalogue}>
				<Container>
					<div className={classes.Wrapper}>
						<div className={classes.Title}>
							<h1 className={classes.Heading}>Or explore existing..</h1>

							<div className={classes.Line} />
						</div>

						<div className={classes.Content}>
							<Gallery data={catalogue} onClick={(id) => history.push(`/projects/${id}`)} dark />
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Projects;
