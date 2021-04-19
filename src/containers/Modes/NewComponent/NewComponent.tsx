import React, { useState } from 'react';

import { CollectionsRounded, GroupRounded, StorageRounded, WallpaperRounded } from '@material-ui/icons';
import { IAction, IBar } from 'interfaces/activities';

import Hierarchy from 'components/Hierarchy/Hierarchy';
import Components from 'containers/Components/Components';

import classes from './NewComponent.module.scss';

interface Props {
	onDismiss: () => void;
}

const NewComponent: React.FC<Props> = ({ onDismiss }) => {
	const [selected, setSelected] = useState<number | null>(null);
	const [activeBar, setActiveBar] = useState<number>(1);

	const switchBarHandler = (id: number) => {
		setSelected(null);
		setActiveBar(id);
	};

	const bars: IBar[] = [
		{
			id: 1,
			icon: <WallpaperRounded />,
			label: 'Banners',
			onClick: () => switchBarHandler(1)
		},
		{
			id: 2,
			icon: <GroupRounded />,
			label: 'Introduction',
			onClick: () => switchBarHandler(2)
		},
		{
			id: 3,
			icon: <StorageRounded />,
			label: 'Interstitial',
			onClick: () => switchBarHandler(3)
		},
		{
			id: 4,
			icon: <CollectionsRounded />,
			label: 'Gallery',
			onClick: () => switchBarHandler(4)
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

	const bannerComponents = [
		{
			id: 1,
			name: 'Image First'
		},
		{
			id: 2,
			name: 'Full Width'
		},
		{
			id: 3,
			name: 'Informational'
		},
		{
			id: 4,
			name: 'Video Centered'
		},
		{
			id: 5,
			name: 'Image Slideshow'
		},
		{
			id: 6,
			name: 'Centered Information'
		}
	];

	const content = (
		<Components
			className={classes.Wrapper}
			data={activeBar === 1 ? bannerComponents : []}
			onSelect={setSelected}
			selected={selected}
		/>
	);

	return <Hierarchy heading='New Component' bars={bars} content={content} actions={actions} activeBar={activeBar} />;
};

export default NewComponent;
