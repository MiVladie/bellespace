import React from 'react';

import { CollectionsRounded, GroupRounded, StorageRounded, WallpaperRounded } from '@material-ui/icons';
import { IAction, IBar } from 'interfaces/activities';

export const Content: React.FC = () => {
	return <div>New Component</div>;
};

const Actions: IAction[] = [
	{
		id: 1,
		name: 'Add'
	},
	{
		id: 2,
		name: 'Cancel'
	}
];

export const Bars: IBar[] = [
	{
		id: 1,
		icon: <WallpaperRounded />,
		label: 'Banner',
		actions: Actions,
		heading: 'New Component'
	},
	{
		id: 2,
		icon: <GroupRounded />,
		label: 'Introduction',
		actions: Actions,
		heading: 'New Component'
	},
	{
		id: 3,
		icon: <StorageRounded />,
		label: 'Interstitial',
		actions: Actions,
		heading: 'New Component'
	},
	{
		id: 4,
		icon: <CollectionsRounded />,
		label: 'Gallery',
		actions: Actions,
		heading: 'New Component'
	}
];
