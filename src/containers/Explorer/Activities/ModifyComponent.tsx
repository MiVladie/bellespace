import React, { useCallback, useContext, useEffect, useState } from 'react';

import { getComponentById } from 'library';
import { Action } from 'context/actions/website';
import { IAction, IBar } from 'interfaces/hierarchy';
import { IFolder } from 'interfaces/components/folder';
import { WebsiteContext } from 'context/providers/website';
import { DeleteRounded, FormatPaintRounded, TextFieldsRounded } from '@material-ui/icons';
import { hasChanged } from 'util/validation';

import Folders from 'containers/Folders/Folders';
import Hierarchy from 'containers/Explorer/Hierarchy/Hierarchy';
import useDidUpdateEffect from 'hooks/render';

import classes from '../Explorer.module.scss';

interface IField {
	[key: string]: string | number | { [key: string]: string | number };
}

interface IError {
	[key: string]: string;
}

interface Props {
	pageId: number;
	componentId: number;
	onDismiss: () => void;
}

const NewComponent: React.FC<Props> = ({ pageId, componentId, onDismiss }) => {
	const [fields, setFields] = useState<IField>({});
	const [errors, setErrors] = useState<IError>({});

	const [structure, setStructure] = useState<IFolder[]>([]);

	const [active, setActive] = useState<number>(1);

	const { state, dispatch } = useContext(WebsiteContext);

	useEffect(() => {
		initializeContent();
	}, [active]);

	useDidUpdateEffect(() => {
		updateFields();
	}, [fields]);

	const initializeContent = () => {
		const stateComponent = state!.pages
			.find((page) => page.id === pageId)
			?.components.find((component) => component.id === componentId);

		if (!stateComponent) {
			throw new Error('Could not establish the state component!');
		}

		const bulkComponent = getComponentById(stateComponent.componentId);

		if (!bulkComponent) {
			throw new Error('Could not establish the bulk component!');
		}

		switch (active) {
			case 1:
				setFields(stateComponent.content);
				setStructure(bulkComponent.content);
				break;

			case 2:
				setFields({} /*stateStyles?.properties*/);
				setStructure(bulkComponent.style);
				break;

			default:
				break;
		}

		setErrors({});
	};

	const updateFields = () => {
		// Initializing updated fields
		const localFields = { ...fields };

		const stateComponent = state!.pages
			.find((page) => page.id === pageId)
			?.components.find((component) => component.id === componentId);

		if (!stateComponent) {
			throw new Error('Could not establish the state component!');
		}

		const keys: string[] = [];

		for (const folder of structure) {
			for (const field of folder.fields) {
				keys.push(field.name);
			}
		}

		if (!hasChanged(keys, stateComponent.content, localFields)) {
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
				fields: {
					...localFields
				}
			}
		});
	};

	const getHeader = useCallback((): string => {
		switch (active) {
			case 1:
				return 'Modify Content';

			case 2:
				return 'Modify Styles';

			case 3:
				return 'Delete Component';

			default:
				throw new Error('Could not identify the active bar!');
		}
	}, [active]);

	const getBars = useCallback((): IBar[] => {
		return [
			{
				id: 1,
				icon: <TextFieldsRounded />,
				onClick: () => setActive(1)
			},
			{
				id: 2,
				icon: <FormatPaintRounded />,
				onClick: () => setActive(2)
			},
			{
				id: 3,
				icon: <DeleteRounded />,
				onClick: () => setActive(3)
			}
		];
	}, []);

	const getContent = (): React.ReactNode => {
		if (active === 3) {
			return (
				<div className={classes.Wrapper}>
					<h3 className={classes.Heading}>
						Are you sure you want to delete this component? This action <b>cannot</b> be undone.
					</h3>
				</div>
			);
		}

		return (
			<Folders
				data={structure}
				onValues={setFields}
				onErrors={setErrors}
				values={fields}
				errors={errors}
				instantValidation
			/>
		);
	};

	const getActions = useCallback((): IAction[] | null => {
		switch (active) {
			case 1:
				return null;

			case 2:
				return null;

			case 3:
				return [
					{
						id: 1,
						name: 'Delete',
						onClick: onDelete
					},
					{
						id: 2,
						name: 'Cancel',
						onClick: onDismiss
					}
				];

			default:
				throw new Error('Could not identify the active bar!');
		}
	}, [active]);

	const onDelete = () => {
		dispatch({ type: Action.DELETE_COMPONENT, payload: { pageId, componentId } });

		onDismiss();
	};

	return (
		<Hierarchy
			heading={getHeader()}
			activeBar={active}
			content={getContent()}
			bars={getBars()}
			actions={getActions()}
		/>
	);
};

export default NewComponent;
