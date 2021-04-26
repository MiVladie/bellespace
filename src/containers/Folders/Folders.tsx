import { useState } from 'react';

import { IColor } from 'interfaces/components/color';
import { IInput } from 'interfaces/components/input';
import { ISlider } from 'interfaces/components/slider';
import { IDropdown } from 'interfaces/components/dropdown';
import { IFolder, TField } from 'interfaces/components/folder';
import { AddRounded, RemoveRounded } from '@material-ui/icons';
import { containsErrors } from 'util/validation';

import Accordion from 'components/ui/Accordion/Accordion';

import Color from 'components/ui/Color/Color';
import Dropdown from 'components/ui/Dropdown/Dropdown';
import Slider from 'components/ui/Slider/Slider';
import Input from 'components/ui/Input/Input';

import classes from './Folders.module.scss';

type Props<T, U> = {
	data: IFolder[];
	onChange: (e: T) => void;
	onErrors: (e: U) => void;
	values: T;
	errors: U;
};

const Folders = <T, U>({ data, onErrors, errors }: Props<T, U>) => {
	const [open, setOpen] = useState<number[]>([0]);

	const isOpen = (id: number) => {
		return open.includes(id);
	};

	const onExpand = (id: number) => {
		if (isOpen(id)) {
			setOpen((prevState) => prevState.filter((i) => i !== id));

			return;
		}

		setOpen((prevState) => [...prevState, id]);
	};

	const onFocus = (field: IInput | IDropdown | IColor) => {
		if (field.name in errors) {
			const newErrors = { ...errors };

			delete newErrors[field.name as keyof U];

			onErrors(newErrors);
		}
	};

	const onBlur = (field: IInput) => {
		if (!field.rules) {
			return;
		}

		const error = containsErrors(field.value, field.rules);

		if (error) {
			onErrors({ ...errors, [field.name]: error });
		}
	};

	const getComponentByType = ({ type, ...rest }: TField) => {
		switch (type) {
			case 'color':
				return <Color {...(rest as IColor)} key={rest.name} />;

			case 'dropdown':
				return <Dropdown {...(rest as IDropdown)} key={rest.name} />;

			case 'slider':
				return <Slider {...(rest as ISlider)} key={rest.name} />;

			default:
				return (
					<Input
						{...(rest as IInput)}
						type={type}
						onFocus={() => onFocus(rest as IInput)}
						onBlur={() => onBlur(rest as IInput)}
						key={rest.name}
					/>
				);
		}
	};

	return (
		<ul className={classes.Folders}>
			{data.map((item, index) => (
				<li className={classes.Folder} key={item.name}>
					<div className={classes.Section} onClick={() => onExpand(index)}>
						<h3 className={classes.Name}>{item.name}</h3>

						{isOpen(index) ? <RemoveRounded /> : <AddRounded />}
					</div>

					<Accordion className={classes.Content} expanded={isOpen(index)}>
						{item.fields.map((field) => getComponentByType(field))}
					</Accordion>
				</li>
			))}
		</ul>
	);
};

export default Folders;
