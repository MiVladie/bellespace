import React from 'react';

import { CollectionsRounded, GroupRounded, StorageRounded, WallpaperRounded } from '@material-ui/icons';
import { Categories } from 'library';

import Component from 'components/Component/Component';

import classes from './Library.module.scss';

interface Props {
	category: number;
	onSelect: (id: number) => void;
}

const Library: React.FC<Props> = ({ category, onSelect }) => {
	const data = Categories.find((c) => c.id === category)?.components || [];

	return (
		<div className={classes.Library}>
			{data.map((component) => (
				<Component
					key={component.id}
					id={component.id}
					name={component.name}
					url={component.url}
					onSelect={onSelect}
				/>
			))}
		</div>
	);
};

export default Library;

export const Heading = 'Add Component';

export const Sections = [
	{
		id: 0,
		name: 'Banner',
		icon: <WallpaperRounded />
	},
	{
		id: 1,
		name: 'Introduction',
		icon: <GroupRounded />
	},
	{
		id: 2,
		name: 'Interstitial',
		icon: <StorageRounded />
	},
	{
		id: 3,
		name: 'Gallery',
		icon: <CollectionsRounded />
	}
];
