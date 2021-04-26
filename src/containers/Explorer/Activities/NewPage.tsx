import React, { useContext, useState } from 'react';

import { IAction, IBar } from 'interfaces/hierarchy';
import { WebsiteContext } from 'context/providers/website';
import { IFolder } from 'interfaces/components/folder';
import { AddRounded } from '@material-ui/icons';

import Hierarchy from 'containers/Explorer/Hierarchy/Hierarchy';
import Folders from 'containers/Folders/Folders';

interface IContent {
	setFields: (e: IForm) => void;
	setErrors: (e: IError) => void;
	fields: IForm;
	errors: IError;
}

interface IActions {
	onSubmit: () => void;
	onDismiss: () => void;
}

interface IForm {
	name: string;
	url: string;
	description?: string;
}

type IError = {
	[key in keyof IForm]?: string;
};

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

const getContent = ({ setFields, setErrors, fields, errors }: IContent): React.ReactNode => {
	const data: IFolder[] = [
		{
			name: 'General',
			fields: []
		},
		{
			name: 'Extra',
			fields: []
		}
	];

	return <Folders data={data} onChange={setFields} onErrors={setErrors} values={fields} errors={errors} />;
};

const getActions = ({ onSubmit, onDismiss }: IActions): IAction[] => {
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
	const [fields, setFields] = useState<IForm>({ name: '', url: '' });
	const [errors, setErrors] = useState<IError>({});

	const [active, setActive] = useState<number>(1);

	const { state, dispatch } = useContext(WebsiteContext);

	const onSubmit = () => {
		console.log({ fields, errors });
	};

	return (
		<Hierarchy
			heading='New Page'
			activeBar={active}
			content={getContent({ setFields, setErrors, fields, errors })}
			bars={getBars(setActive)}
			actions={getActions({ onSubmit, onDismiss })}
		/>
	);
};

export default NewPage;
