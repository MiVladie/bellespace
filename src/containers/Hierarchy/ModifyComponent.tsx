import React from 'react';

import { DeleteRounded, FormatPaintRounded, SettingsRounded, TextFieldsRounded } from '@material-ui/icons';
import { IBar } from 'interfaces/activities';

export const Content: React.FC = () => {
	return <div>Modify Component</div>;
};

export const Bars: IBar[] = [
	{
		id: 1,
		icon: <TextFieldsRounded />,
		heading: 'Modify Content'
	},
	{
		id: 2,
		icon: <FormatPaintRounded />,
		heading: 'Style Component'
	},
	{
		id: 3,
		icon: <DeleteRounded />,
		heading: 'Delete Component',
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
	},
	{
		id: 4,
		icon: <SettingsRounded />,
		heading: 'Settings'
	}
];
