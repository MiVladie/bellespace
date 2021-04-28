import React, { useContext, useEffect, useState } from 'react';

import { Action } from 'context/actions/website';
import { IAction, IBar } from 'interfaces/hierarchy';
import { WebsiteContext } from 'context/providers/website';
import { getComponentsByCategory, getComponentById, getCategoryById } from 'library';
import { COMPONENT_CATEGORIES } from 'constants/website';

import Hierarchy from 'containers/Explorer/Hierarchy/Hierarchy';
import Components from 'containers/Components/Components';

import classes from '../Explorer.module.scss';
import { IComponent } from 'interfaces/website';

interface IActions {
	selected: number | null;
	onSubmit: () => void;
	onDismiss: () => void;
}

interface IContent {
	category: number;
	selected: number | null;
	setSelected: (id: number | null) => void;
}

interface Props {
	pageId: number;
	onDismiss: () => void;
}

const getBars = (onClick: (id: number) => void): IBar[] => {
	return COMPONENT_CATEGORIES.map((category) => ({ ...category, onClick: () => onClick(category.id) }));
};

const getContent = ({ category, selected, setSelected }: IContent): React.ReactNode => {
	return (
		<Components
			className={classes.Wrapper}
			data={getComponentsByCategory(category)}
			onSelect={setSelected}
			selected={selected}
		/>
	);
};

const getActions = ({ selected, onSubmit, onDismiss }: IActions): IAction[] | null => {
	return [
		{
			id: 1,
			name: 'Add',
			onClick: onSubmit,
			disabled: !selected
		},
		{
			id: 2,
			name: 'Cancel',
			onClick: onDismiss
		}
	];
};

const NewComponent: React.FC<Props> = ({ pageId, onDismiss }) => {
	const [selected, setSelected] = useState<number | null>(null);
	const [active, setActive] = useState<number>(1);

	const { dispatch } = useContext(WebsiteContext);

	useEffect(() => {
		setSelected(null);
	}, [active]);

	const onSubmit = () => {
		const bulkComponent = getComponentById(selected!);
		const bulkCategory = getCategoryById(active);

		const component: IComponent = {
			id: Math.random(),
			componentId: bulkComponent.id,
			name: `${bulkCategory.label} (${bulkComponent.name})`,
			content: bulkComponent.content
		};

		dispatch({ type: Action.ADD_COMPONENT, payload: { pageId, component } });

		onDismiss();
	};

	return (
		<Hierarchy
			heading='New Component'
			activeBar={active}
			content={getContent({ category: active, selected, setSelected })}
			bars={getBars(setActive)}
			actions={getActions({ selected, onSubmit, onDismiss })}
		/>
	);
};

export default NewComponent;
