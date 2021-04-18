import React, { useState } from 'react';

import { CollectionsRounded, GroupRounded, StorageRounded, WallpaperRounded } from '@material-ui/icons';
import { IAction, IBar } from 'interfaces/activities';

import Hierarchy from 'containers/Hierarchy/Hierarchy';

interface Props {
	onDismiss: () => void;
}

const NewComponent: React.FC<Props> = ({ onDismiss }) => {
	const [activeBar, setActiveBar] = useState<number>(1);

	const bars: IBar[] = [
		{
			id: 1,
			icon: <WallpaperRounded />,
			label: 'Banner',
			onClick: () => setActiveBar(1)
		},
		{
			id: 2,
			icon: <GroupRounded />,
			label: 'Introduction',
			onClick: () => setActiveBar(2)
		},
		{
			id: 3,
			icon: <StorageRounded />,
			label: 'Interstitial',
			onClick: () => setActiveBar(3)
		},
		{
			id: 4,
			icon: <CollectionsRounded />,
			label: 'Gallery',
			onClick: () => setActiveBar(4)
		}
	];

	const actions: IAction[] = [
		{
			id: 1,
			name: 'Add',
			onClick: () => null
		},
		{
			id: 2,
			name: 'Cancel',
			onClick: onDismiss
		}
	];

	const content = null;

	return <Hierarchy heading='New Page' bars={bars} content={content} actions={actions} activeBar={activeBar} />;
};

export default NewComponent;
