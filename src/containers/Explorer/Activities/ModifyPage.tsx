import React, { useContext, useEffect, useState } from 'react';

import { IPage, IPageOptions } from 'interfaces/website';
import { IAction, IBar } from 'interfaces/hierarchy';
import { TError } from 'interfaces/validaton';
import { Action } from 'context/actions/website';
import { IFolder } from 'interfaces/components/folder';
import { WebsiteContext } from 'context/providers/website';
import { DeleteRounded, SettingsRounded } from '@material-ui/icons';
import { hasChanged } from 'util/validation';

import Hierarchy from 'containers/Explorer/Hierarchy/Hierarchy';
import useDidUpdateEffect from 'hooks/userDidUpdateEffect';
import Folders from 'containers/Folders/Folders';

import classes from '../Explorer.module.scss';

interface IHeading {
	bar: number;
}

interface IContent {
	bar: number;
	pageId: number;
	pages: IPage[];
	setFields: (e: IForm) => void;
	setErrors: (e: TError<IForm>) => void;
	fields: IForm;
	errors: TError<IForm>;
	options?: IPageOptions;
}

interface IActions {
	bar: number;
	onDelete: () => void;
	onDismiss: () => void;
}

interface IBars {
	onClick: (id: number) => void;
	options?: IPageOptions;
}

interface IForm {
	name: string;
	route: string;
	description?: string;
}

interface Props {
	pageId: number;
	onDismiss: () => void;
}

const getBars = ({ onClick, options }: IBars): IBar[] => {
	const bars: IBar[] = [
		{
			id: 1,
			icon: <SettingsRounded />,
			onClick: () => onClick(1)
		}
	];

	if (!options?.disableDeletion) {
		bars.push({
			id: 2,
			icon: <DeleteRounded />,
			onClick: () => onClick(2)
		});
	}

	return bars;
};

const getContent = ({
	bar,
	pageId,
	pages,
	setFields,
	setErrors,
	fields,
	errors,
	options
}: IContent): React.ReactNode => {
	const takenNames = pages.filter((page) => page.id !== pageId).map((page) => page.name);
	const takenRoutes = pages.filter((page) => page.id !== pageId).map((page) => page.route);

	const modifyData: IFolder[] = [
		{
			name: 'General',
			fields: [
				{
					name: 'name',
					type: 'text',
					placeholder: options?.disableNameModification ? '' : 'About',
					label: 'Name',
					info: 'The name of the webpage.',
					disabled: options?.disableNameModification,
					rules: {
						required: true,
						custom: (value) => {
							if (takenNames.includes(value)) {
								return 'The name is already taken!';
							}

							return false;
						}
					}
				},
				{
					name: 'route',
					type: 'text',
					placeholder: options?.disableRouteModification ? '' : 'about',
					label: 'Route',
					info: 'The route of the web page. Route will be displayed at the end of the website link.',
					prefix: '/',
					disabled: options?.disableRouteModification,
					rules: {
						required: true,
						isRoute: true,
						custom: (value) => {
							if (takenRoutes.includes(value)) {
								return 'The route name is already taken!';
							}

							return false;
						}
					}
				}
			]
		},
		{
			name: 'Extra',
			fields: [
				{
					name: 'description',
					type: 'textarea',
					placeholder: 'Type something..',
					label: 'Description'
				}
			]
		}
	];

	switch (bar) {
		case 1:
			return (
				<Folders
					data={modifyData}
					onValues={setFields}
					onErrors={setErrors}
					values={fields}
					errors={errors}
					instantValidation
				/>
			);

		case 2:
			return (
				<div className={classes.Wrapper}>
					<h2 className={classes.Heading}>
						Are you sure you want to delete this page? This action <b>cannot</b> be undone.
					</h2>
				</div>
			);

		default:
			throw new Error('Could not identify the active bar!');
	}
};

const getActions = ({ bar, onDelete, onDismiss }: IActions): IAction[] | null => {
	switch (bar) {
		case 1:
			return null;

		case 2:
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
};

const getHeading = ({ bar }: IHeading): string => {
	switch (bar) {
		case 1:
			return 'Modify Page';

		case 2:
			return 'Delete Page';

		default:
			throw new Error('Could not identify the active bar!');
	}
};

const ModifyPage: React.FC<Props> = ({ pageId, onDismiss }) => {
	const [fields, setFields] = useState<IForm>({ name: '', route: '' });
	const [errors, setErrors] = useState<TError<IForm>>({});
	const [page, setPage] = useState<IPage>();

	const [active, setActive] = useState<number>(1);

	const { state, dispatch } = useContext(WebsiteContext);

	useEffect(() => {
		initializeContent();
	}, [pageId]);

	useDidUpdateEffect(() => {
		updateFields();
	}, [fields]);

	const initializeContent = () => {
		const activePage: IPage = state!.pages.find((page) => page.id === pageId)!;

		if (!activePage) {
			throw new Error('Could not identify an active page!');
		}

		const newFields: IForm = {
			name: activePage.name,
			route: activePage.route,
			description: activePage.description
		};

		setFields(newFields);
		setPage(activePage);
		setErrors({});
		setActive(1);
	};

	const updateFields = () => {
		const activePage: IPage = state!.pages.find((page) => page.id === pageId)!;

		if (!hasChanged(['name', 'route', 'description'], activePage, fields)) {
			return;
		}

		// Initializing updated fields
		const data: TError<IForm> = {};

		// Assigning all of the fields without errors
		Object.keys(fields).forEach((key) => {
			if (!errors[key as keyof IForm]) {
				data[key as keyof IForm] = fields[key as keyof IForm];
			}
		});

		// Saving to the global store
		dispatch({
			type: Action.UPDATE_PAGE,
			payload: {
				pageId: pageId,
				...data
			}
		});
	};

	const deletePage = () => {
		dispatch({ type: Action.DELETE_PAGE, payload: { pageId: pageId } });

		onDismiss();
	};

	return (
		<Hierarchy
			heading={getHeading({ bar: active })}
			activeBar={active}
			content={getContent({
				bar: active,
				pageId: pageId,
				pages: state!.pages,
				setFields,
				setErrors,
				fields,
				errors,
				options: page?.options
			})}
			bars={getBars({ onClick: setActive, options: page?.options })}
			actions={getActions({ bar: active, onDelete: deletePage, onDismiss })}
		/>
	);
};

export default ModifyPage;
