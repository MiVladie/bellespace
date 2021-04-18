import React from 'react';

import { DeleteRounded, TextFieldsRounded } from '@material-ui/icons';
import { IBar } from 'interfaces/activities';

export const Content: React.FC = () => {
	return <div>Modify Page</div>;
};

export const Bars: IBar[] = [
	{
		id: 1,
		icon: <TextFieldsRounded />,
		heading: 'Modify Page'
	},
	{
		id: 2,
		icon: <DeleteRounded />,
		heading: 'Delete Page',
		actions: [
			{
				id: 1,
				name: 'Delete'
			},
			{
				id: 2,
				name: 'Cancel'
			}
		]
	}
];
