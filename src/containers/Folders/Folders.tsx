import { useState } from 'react';

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
	onValues: (e: T) => void;
	onErrors: (e: U) => void;
	values: T;
	errors: U;
	instantValidation?: boolean;
};

const Folders = <T, U>({ data, onValues, onErrors, values, errors, instantValidation }: Props<T, U>) => {
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

	const onFocus = (field: TField) => {
		if (instantValidation) {
			return;
		}

		if (field.name in errors) {
			const newErrors = { ...errors };

			delete newErrors[field.name as keyof U];

			onErrors(newErrors);
		}
	};

	const onChange = <X,>(field: TField, e: X) => {
		if (instantValidation) {
			validateField<X>(field, e);
		}

		onValues({ ...values, [field.name]: e });
	};

	const onBlur = (field: TField) => {
		if (instantValidation) {
			return;
		}

		if (field.name in values) {
			validateField(field, values[field.name as keyof T]);
		}
	};

	const validateField = <Y,>(field: TField, value: Y) => {
		// Return if no rules defined
		if (!field.rules) {
			return;
		}

		// Check for errors
		const error = containsErrors<Y>(value, field.rules);

		if (error) {
			// Register error
			onErrors({ ...errors, [field.name]: error });
		} else if (field.name in errors) {
			// Remove error
			const newErrors = { ...errors };

			delete newErrors[field.name as keyof U];

			onErrors(newErrors);
		}
	};

	const getComponentByType = (field: TField) => {
		switch (field.type) {
			case 'color':
				return (
					<Color
						{...field}
						onFocus={() => field.onFocus?.() || onFocus(field)}
						onChange={(e) => field.onChange?.(e) || onChange<string>(field, e)}
						onBlur={() => field.onBlur?.() || onBlur(field)}
						key={field.name}
					/>
				);

			case 'dropdown':
				return (
					<Dropdown
						{...field}
						onFocus={() => field.onFocus?.() || onFocus(field)}
						onChange={(e) => field.onChange?.(e) || onChange<number>(field, e)}
						onBlur={() => field.onBlur?.() || onBlur(field)}
						key={field.name}
					/>
				);

			case 'slider':
				return (
					<Slider
						{...field}
						onFocus={() => field.onFocus?.() || onFocus(field)}
						onChange={(e) => field.onChange?.(e) || onChange<number>(field, e)}
						onBlur={() => field.onBlur?.() || onBlur(field)}
						key={field.name}
					/>
				);

			default:
				return (
					<Input
						{...field}
						type={field.type}
						onFocus={() => onFocus(field)}
						onChange={(e) => onChange<string>(field, e)}
						onBlur={() => onBlur(field)}
						key={field.name}
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
