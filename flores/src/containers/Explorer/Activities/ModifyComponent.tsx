import React, { useCallback, useContext, useEffect, useState } from 'react';

import { getComponentById } from 'library';
import { IStyle } from 'interfaces/website';
import { Action } from 'context/actions/website';
import { IAction, IBar } from 'interfaces/hierarchy';
import { IFolder } from 'interfaces/components/folder';
import { WebsiteContext } from 'context/providers/website';
import { DeleteRounded, FormatPaintRounded, TextFieldsRounded } from '@material-ui/icons';
import { establishDebounce, presetDebounce } from 'util/performance';
import { hasChanged } from 'util/validation';

import Folders from 'containers/Folders/Folders';
import Hierarchy from 'containers/Explorer/Hierarchy/Hierarchy';
import useDidUpdateEffect from 'hooks/userDidUpdateEffect';
import useDebounce from 'hooks/useDebounce';

import classes from '../Explorer.module.scss';

interface IField {
	[key: string]: string | number | { [key: string]: string | number };
}

interface IError {
	[key: string]: string;
}

interface Props {
	pageId: string;
	componentId: string;
	onDismiss: () => void;
}

const NewComponent: React.FC<Props> = ({ pageId, componentId, onDismiss }) => {
	const [debounce, setDebounce] = useState<number>(0);

	const [debouncedFields, fields, setFields] = useDebounce<IField>({}, debounce);
	const [errors, setErrors] = useState<IError>({});

	const [structure, setStructure] = useState<IFolder[]>([]);

	const [active, setActive] = useState<number>(1);

	const { state, dispatch } = useContext(WebsiteContext);

	useEffect(() => {
		initializeContent();

		if (active === 2) {
			setDebounce(presetDebounce);
		} else {
			setDebounce(0);
		}
	}, [active, componentId]);

	useDidUpdateEffect(() => {
		if (active === 1) {
			updateContentFields();
		} else {
			updateStyleFields();
		}
	}, [debouncedFields]);

	const initializeContent = () => {
		const bulkComponent = getComponentById(state!.pages[pageId].components[componentId].id);

		if (!bulkComponent) {
			throw new Error('Could not establish the bulk component!');
		}

		const stateStyles = state!.styles[bulkComponent.id];

		if (!stateStyles) {
			throw new Error('Could not establish the default styles!');
		}

		switch (active) {
			case 1:
				setFields(state!.pages[pageId].components[componentId].content);
				setStructure(bulkComponent.content);
				break;

			case 2:
				setFields(stateStyles);
				setStructure(bulkComponent.style);
				break;

			default:
				break;
		}

		setErrors({});
	};

	const updateContentFields = () => {
		// Initializing updated fields
		const localFields = { ...fields };

		const keys: string[] = [];

		for (const folder of structure) {
			for (const field of folder.fields) {
				keys.push(field.name);
			}
		}

		if (!hasChanged(keys, state!.pages[pageId].components[componentId].content, localFields)) {
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
				id: componentId,
				fields: {
					...localFields
				}
			}
		});
	};

	const updateStyleFields = () => {
		// Saving to the global store
		dispatch({
			type: Action.UPDATE_STYLE,
			payload: {
				id: state!.pages[pageId].components[componentId].id,
				fields: fields as IStyle
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
		dispatch({
			type: Action.DELETE_COMPONENT,
			payload: { pageId, id: componentId, componentId: state!.pages[pageId].components[componentId].id }
		});

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
