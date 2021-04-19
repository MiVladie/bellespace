import React, { useState } from 'react';

import { DeleteRounded, FormatPaintRounded, SettingsRounded, TextFieldsRounded } from '@material-ui/icons';
import { IBar } from 'interfaces/activities';

import Hierarchy from 'components/Hierarchy/Hierarchy';

const ModifyComponent: React.FC = () => {
	const [activeBar, setActiveBar] = useState<number>(1);

	const bars: IBar[] = [
		{
			id: 1,
			icon: <TextFieldsRounded />,
			onClick: () => setActiveBar(1)
		},
		{
			id: 2,
			icon: <FormatPaintRounded />,
			onClick: () => setActiveBar(2)
		},
		{
			id: 3,
			icon: <DeleteRounded />,
			onClick: () => setActiveBar(3)
		},
		{
			id: 4,
			icon: <SettingsRounded />,
			onClick: () => setActiveBar(4)
		}
	];

	const content = null;

	return <Hierarchy heading='Modify Component' bars={bars} content={content} activeBar={activeBar} />;
};

export default ModifyComponent;
