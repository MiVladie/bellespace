import React, { useState } from 'react';

import { DeleteRounded, TextFieldsRounded } from '@material-ui/icons';
import { IBar } from 'interfaces/activities';

import Hierarchy from 'containers/Hierarchy/Hierarchy';

const ModifyPage: React.FC = () => {
	const [activeBar, setActiveBar] = useState<number>(1);

	const bars: IBar[] = [
		{
			id: 1,
			icon: <TextFieldsRounded />,
			onClick: () => setActiveBar(1)
		},
		{
			id: 2,
			icon: <DeleteRounded />,
			onClick: () => setActiveBar(2)
		}
	];

	const content = null;

	return <Hierarchy heading='Modify Page' bars={bars} content={content} activeBar={activeBar} />;
};

export default ModifyPage;
