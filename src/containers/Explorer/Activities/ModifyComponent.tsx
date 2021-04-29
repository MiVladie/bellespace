import React, { useContext, useEffect, useState } from 'react';

import { IPage } from 'interfaces/website';
import { hasChanged } from 'util/validation';
import { Action } from 'context/actions/website';
import { IAction, IBar } from 'interfaces/hierarchy';
import { WebsiteContext } from 'context/providers/website';
import { DeleteRounded, FormatPaintRounded, TextFieldsRounded } from '@material-ui/icons';
import { getComponentById } from 'library';

import Hierarchy from 'containers/Explorer/Hierarchy/Hierarchy';
import Folders from 'containers/Folders/Folders';

interface IBars {
	onClick: (id: number) => void;
}

interface IContent {
	bar: number;
	componentId: number;
	fields: any;
	errors: any;
	setFields: (e: any) => void;
	setErrors: (e: any) => void;
}

interface Props {
	pageId: number;
	componentId: number;
	onDismiss: () => void;
}

const getBars = ({ onClick }: IBars): IBar[] => {
	return [
		{
			id: 1,
			icon: <TextFieldsRounded />,
			onClick: () => onClick(1)
		},
		{
			id: 2,
			icon: <FormatPaintRounded />,
			onClick: () => onClick(2)
		},
		{
			id: 3,
			icon: <DeleteRounded />,
			onClick: () => onClick(3)
		}
	];
};

const getContent = ({ bar, componentId, fields, errors, setFields, setErrors }: IContent): React.ReactNode => {
	switch (bar) {
		case 1:
			return (
				<Folders
					data={getComponentById(componentId).content}
					onValues={setFields}
					onErrors={setErrors}
					values={fields}
					errors={errors}
					instantValidation
				/>
			);

		default:
			throw new Error('Could not identify the active bar!');
	}
};

const getActions = (): IAction[] | null => {
	return null;
};

const getActiveStateComponent = (pages: IPage[], pageId: number, componentId: number) => {
	const activePageIndex = pages.findIndex((page) => page.id === pageId);

	if (activePageIndex === -1) {
		throw new Error('Could not find the active page!');
	}

	const activeComponentIndex = pages[activePageIndex].components.findIndex(
		(component) => component.id === componentId
	);

	if (activeComponentIndex === -1) {
		throw new Error('Could not find the active component!');
	}

	return pages[activePageIndex].components[activeComponentIndex];
};

const NewComponent: React.FC<Props> = ({ pageId, componentId }) => {
	const [fields, setFields] = useState<any>({});
	const [errors, setErrors] = useState<any>({});

	const [active, setActive] = useState<number>(1);

	const { state, dispatch } = useContext(WebsiteContext);

	useEffect(() => {
		setFields({});
		setErrors({});
	}, [active]);

	useEffect(() => {
		updateFields();
	}, [fields]);

	const updateFields = () => {
		// Initializing updated fields
		const localFields = { ...fields };

		const stateFields = getActiveStateComponent(state!.pages, pageId, componentId);

		const keys: string[] = [];
		const defaultFolders = getComponentById(stateFields.componentId).content;

		for (const folder of defaultFolders) {
			for (const field of folder.fields) {
				keys.push(field.name);
			}
		}

		if (!hasChanged(keys, stateFields.content, localFields)) {
			return;
		}

		// Assigning all of the fields without errors
		Object.keys(fields).forEach((key) => {
			if (key in errors) {
				delete localFields[key];
			}
		});

		// Saving to the global store
		dispatch({
			type: Action.UPDATE_COMPONENT,
			payload: {
				pageId: pageId,
				componentId: componentId,
				...localFields
			}
		});
	};

	console.log(
		state!.pages.find((page) => page.id === pageId)!.components.find((component) => component.id === componentId)!
			.content
	);

	return (
		<Hierarchy
			heading='Modify Component'
			activeBar={active}
			content={getContent({
				bar: active,
				componentId: getActiveStateComponent(state!.pages, pageId, componentId).componentId,
				fields,
				errors,
				setFields,
				setErrors
			})}
			bars={getBars({ onClick: setActive })}
			actions={getActions()}
		/>
	);
};

export default NewComponent;
