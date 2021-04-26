import React, { useContext, useState } from 'react';

import { IAction, IBar } from 'interfaces/hierarchy';
import { WebsiteContext } from 'context/providers/website';
import { SettingsRounded } from '@material-ui/icons';

import Hierarchy from 'containers/Explorer/Hierarchy/Hierarchy';

const getBars = (onClick: (id: number) => void): IBar[] => {
	return [
		{
			id: 1,
			icon: <SettingsRounded />,
			onClick: () => onClick(1)
		}
	];
};

const getContent = (): React.ReactNode => {
	return null;
};

const getActions = (): IAction[] | null => {
	return null;
};

const NewComponent: React.FC = () => {
	const [active, setActive] = useState<number>(1);

	const { state: stateWebsite, dispatch: dispatchWebsite } = useContext(WebsiteContext);

	return (
		<Hierarchy
			heading='Modify Page'
			activeBar={active}
			content={getContent()}
			bars={getBars(setActive)}
			actions={getActions()}
		/>
	);
};

export default NewComponent;
