import React, { useEffect, useState, useRef } from 'react';

import { ExpandMoreRounded, HelpOutline } from '@material-ui/icons';
import { IOption } from 'interfaces';

import Accordion from '../Accordion/Accordion';
import Tooltip from '../Tooltip/Tooltip';

import classes from './Dropdown.module.scss';

interface Props {
	name: string;
	options: IOption[];
	placeholder: string;
	info?: React.ReactNode;
	label?: string;
	onChange: (value: number) => void;
	onFocus?: () => void;
	onBlur?: () => void;
	value: number;
	error?: string | null;
	dark?: boolean;
}

const Dropdown: React.FC<Props> = ({
	name,
	info,
	label,
	placeholder,
	options,
	onChange,
	onFocus,
	onBlur,
	value,
	error,
	dark
}) => {
	const [open, setOpen] = useState<boolean>(false);

	const node = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.addEventListener('mousedown', (event) => {
			if (node.current && !node.current.contains(event.target as Node)) {
				setOpen(false);
			}
		});

		return () => {
			document.removeEventListener('mousedown', () => null);
		};
	}, []);

	const onTransitionEnd = () => {
		if (!open) {
			onBlur?.();
		}
	};

	const onHeaderClick = () => {
		setOpen((prevState) => !prevState);

		onFocus?.();
	};

	const selectedLabel = options.find((o) => o.value === value)?.label;

	return (
		<>
			<div className={[classes.Dropdown, dark ? classes.Dark : null].join(' ')} ref={node}>
				{label && (
					<label className={classes.Label} htmlFor={name}>
						{label}
						{info && (
							<span className={classes.Info}>
								<HelpOutline />

								<Tooltip className={classes.Tooltip} dark={dark}>
									{info}
								</Tooltip>
							</span>
						)}
					</label>
				)}

				<div className={classes.Container}>
					<div className={[classes.Header, error ? classes.Error : null].join(' ')} onClick={onHeaderClick}>
						{selectedLabel ? (
							<span className={classes.Name}>{selectedLabel}</span>
						) : (
							<span className={classes.Placeholder}>{placeholder}</span>
						)}

						<ExpandMoreRounded className={[classes.Icon, open ? classes.Open : null].join(' ')} />
					</div>

					{error && <small className={classes.Message}>{error}</small>}

					<div className={classes.Wrapper}>
						<Accordion className={classes.List} expanded={open} onTransitionEnd={onTransitionEnd}>
							{options.map((option) => (
								<li
									className={[classes.Option, value === option.value ? classes.Selected : null].join(
										' '
									)}
									onClick={() => {
										setOpen(false);
										onChange(option.value);
									}}
									key={option.value}>
									<span className={classes.Label}>{option.label}</span>
								</li>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dropdown;
