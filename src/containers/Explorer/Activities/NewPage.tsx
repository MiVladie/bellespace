import React, { useContext, useState } from 'react';

import { IAction, IBar } from 'interfaces/hierarchy';
import { WebsiteContext } from 'context/providers/website';
import { AddRounded } from '@material-ui/icons';

import Hierarchy from 'containers/Explorer/Hierarchy/Hierarchy';

interface Props {
	onDismiss: () => void;
}

const getBars = (onClick: (id: number) => void): IBar[] => {
	return [
		{
			id: 1,
			icon: <AddRounded />,
			onClick: () => onClick(1)
		}
	];
};

const getContent = (): React.ReactNode => {
	return null;
};

const getActions = ({ onSubmit, onDismiss }: { [key: string]: () => void }): IAction[] => {
	return [
		{
			id: 1,
			name: 'Add',
			onClick: onSubmit
		},
		{
			id: 2,
			name: 'Cancel',
			onClick: onDismiss
		}
	];
};

const NewPage: React.FC<Props> = ({ onDismiss }) => {
	const [active, setActive] = useState<number>(1);

	const { state: stateWebsite, dispatch: dispatchWebsite } = useContext(WebsiteContext);

	const onSubmit = () => {
		console.log('submit');
	};

	return (
		<Hierarchy
			heading='New Page'
			activeBar={active}
			content={getContent()}
			bars={getBars(setActive)}
			actions={getActions({ onSubmit, onDismiss })}
		/>
	);
};

export default NewPage;
