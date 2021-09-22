import { useEffect, useState } from 'react';

import { AddRounded, RemoveRounded } from '@mui/icons-material';
import { IFolder, TField } from 'interfaces/components/folder';
import { IErrorable, IFillable } from 'interfaces/validaton';
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

const Folders = <T extends IFillable<any>, U extends IErrorable>({
	data,
	onValues,
	onErrors,
	values,
	errors,
	instantValidation
}: Props<T, U>) => {
	const [open, setOpen] = useState<number[]>([0]);

	useEffect(() => {
		setOpen([0]);
	}, [data]);

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

	const onChange = <X,>(field: TField, e: X, folder?: string) => {
		if (instantValidation) {
			validateField<X>(field, e);
		}

		if (folder) {
			onValues({ ...values, [folder]: { ...values[folder], [field.name]: e } });

			return;
		}

		onValues({ ...values, [field.name]: e });
	};

	const onBlur = (field: TField, folder?: string) => {
		if (!(field.name in values)) {
			return;
		}

		if (folder) {
			validateField(field, values[folder][field.name as keyof T]);

			return;
		}

		validateField(field, values[field.name as keyof T]);
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

	const getComponentByType = (field: TField, folder?: string) => {
		switch (field.type) {
			case 'color':
				return (
					<Color
						{...field}
						onFocus={() => field.onFocus?.() || onFocus(field)}
						onChange={(e) => field.onChange?.(e) || onChange<string>(field, e, folder)}
						onBlur={() => field.onBlur?.() || onBlur(field, folder)}
						value={(folder ? values[folder]?.[field.name] : values[field.name]) || ''}
						error={errors[field.name]}
						key={field.name}
					/>
				);

			case 'dropdown':
				return (
					<Dropdown
						{...field}
						onFocus={() => field.onFocus?.() || onFocus(field)}
						onChange={(e) => field.onChange?.(e) || onChange<number | null>(field, e, folder)}
						onBlur={() => field.onBlur?.() || onBlur(field, folder)}
						value={(folder ? values[folder]?.[field.name] : values[field.name]) || null}
						error={errors[field.name]}
						key={field.name}
					/>
				);

			case 'slider':
				return (
					<Slider
						{...field}
						onFocus={() => field.onFocus?.() || onFocus(field)}
						onChange={(e) => field.onChange?.(e) || onChange<number>(field, e, folder)}
						onBlur={() => field.onBlur?.() || onBlur(field, folder)}
						value={(folder ? values[folder]?.[field.name] : values[field.name]) || ''}
						error={errors[field.name]}
						key={field.name}
					/>
				);

			default:
				return (
					<Input
						{...field}
						type={field.type}
						onFocus={() => onFocus(field)}
						onChange={(e) => onChange<string>(field, e, folder)}
						onBlur={() => onBlur(field, folder)}
						value={(folder ? values[folder]?.[field.name] : values[field.name]) || ''}
						error={errors[field.name]}
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
						{item.fields.map((field) => getComponentByType(field, item.category))}
					</Accordion>
				</li>
			))}
		</ul>
	);
};

export default Folders;
