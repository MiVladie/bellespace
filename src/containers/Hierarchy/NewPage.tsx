import React from 'react';

import { AddRounded } from '@material-ui/icons';
import { IBar } from 'interfaces/activities';

export const Content: React.FC = () => {
	return <div>New Page</div>;
};

export const Bars: IBar[] = [
	{
		id: 1,
		icon: <AddRounded />,
		heading: 'New Page',
		actions: [
			{
				id: 1,
				name: 'Add'
			},
			{
				id: 2,
				name: 'Cancel'
			}
		]
	}
];
