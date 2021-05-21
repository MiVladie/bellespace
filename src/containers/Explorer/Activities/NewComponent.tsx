import React, { useContext, useEffect, useState } from 'react';

import { Action } from 'context/actions/website';
import { IComponent } from 'interfaces/website';
import { IAction, IBar } from 'interfaces/hierarchy';
import { WebsiteContext } from 'context/providers/website';
import { getComponentsByCategory, getComponentById, getCategoryById } from 'library';
import { COMPONENT_CATEGORIES } from 'constants/website';

import Hierarchy from 'containers/Explorer/Hierarchy/Hierarchy';
import Components from 'containers/Components/Components';

import classes from '../Explorer.module.scss';

interface IActions {
	selected: string | null;
	onSubmit: () => void;
	onDismiss: () => void;
}

interface IContent {
	category: number;
	selected: string | null;
	setSelected: (id: string | null) => void;
}

interface Props {
	pageId: string;
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
	const [selected, setSelected] = useState<string | null>(null);
	const [active, setActive] = useState<number>(1);

	const { dispatch } = useContext(WebsiteContext);

	useEffect(() => {
		setSelected(null);
	}, [active]);

	const onSubmit = () => {
		const bulkComponent = getComponentById(selected!);
		const bulkCategory = getCategoryById(active);

		const component: IComponent = {
			id: bulkComponent.id,
			name: `${bulkCategory.label} (${bulkComponent.name})`,
			content: bulkComponent.defaultContent || {}
		};

		dispatch({
			type: Action.ADD_COMPONENT,
			payload: {
				pageId,
				id: Math.random().toString(),
				component,
				style: {
					[bulkComponent.id]: bulkComponent.defaultStyle
				}
			}
		});

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
