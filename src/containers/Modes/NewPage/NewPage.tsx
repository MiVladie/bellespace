import React, { useState } from 'react';

import { AddRounded } from '@material-ui/icons';
import { IAction, IBar } from 'interfaces/activities';

import Hierarchy from 'components/Hierarchy/Hierarchy';

interface Props {
	onDismiss: () => void;
}

const NewPage: React.FC<Props> = ({ onDismiss }) => {
	const [activeBar, setActiveBar] = useState<number>(1);

	const bars: IBar[] = [
		{
			id: 1,
			icon: <AddRounded />,
			onClick: () => setActiveBar(1)
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

export default NewPage;
