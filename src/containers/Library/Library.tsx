import React, { useEffect, useState } from 'react';

import { CollectionsRounded, GroupRounded, StorageRounded, WallpaperRounded } from '@material-ui/icons';
import { Categories } from 'library';

import Component from 'components/Component/Component';

import classes from './Library.module.scss';

interface ComponentType {
	id: number;
	name: string;
	url?: string;
}

interface Props {
	category: number;
	selected: number | null;
	onSelect: (id: number | null) => void;
}

const Library: React.FC<Props> = ({ category, selected, onSelect }) => {
	const [data, setData] = useState<ComponentType[]>([]);

	useEffect(() => {
		setData(Categories.find((c) => c.id === category)?.components || []);
	}, [category]);

	return (
		<div className={classes.Library}>
			{data.map((component) => (
				<Component
					selected={selected === component.id}
					key={component.id}
					id={component.id}
					name={component.name}
					url={component.url}
					onSelect={(id) => onSelect(selected === id ? null : id)}
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
