import React, { useCallback, useContext, useState } from 'react';

import { Action } from 'context/actions/website';
import { IAction, IBar } from 'interfaces/hierarchy';
import { WebsiteContext } from 'context/providers/website';
import { DeleteRounded, FormatPaintRounded, TextFieldsRounded } from '@material-ui/icons';

import Hierarchy from 'containers/Explorer/Hierarchy/Hierarchy';

import classes from '../Explorer.module.scss';

interface Props {
	pageId: number;
	componentId: number;
	onDismiss: () => void;
}

const NewComponent: React.FC<Props> = ({ pageId, componentId, onDismiss }) => {
	const [active, setActive] = useState<number>(1);

	const { state, dispatch } = useContext(WebsiteContext);

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
		switch (active) {
			case 1:
				return null;

			case 2:
				return null;

			case 3:
				return (
					<div className={classes.Wrapper}>
						<h3 className={classes.Heading}>
							Are you sure you want to delete this component? This action <b>cannot</b> be undone.
						</h3>
					</div>
				);

			default:
				throw new Error('Could not identify the active bar!');
		}
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
