import React, { useEffect, useRef, useState } from 'react';

import { IColor } from 'interfaces/components/color';
import { RgbStringColorPicker, RgbaStringColorPicker } from 'react-colorful';
import { HexToRGBA, RGBAToHex } from 'util/colors';

import Input from 'components/ui/Input/Input';
import Tooltip from '../Tooltip/Tooltip';

import './Picker.scss';

import classes from './Color.module.scss';

const Color: React.FC<IColor> = ({
	name,
	label,
	info,
	placeholder,
	presets,
	options,
	onFocus,
	onChange,
	onBlur,
	value,
	error,
	dark
}) => {
	const [open, setOpen] = useState<boolean>(false);
	const [canUpdate, setCanUpdate] = useState<boolean>(true);

	const node = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.addEventListener('mousedown', closeEvent);

		return () => document.removeEventListener('mousedown', closeEvent);
	}, [value]);

	const closeEvent = (event: MouseEvent) => {
		if (node.current && !node.current.contains(event.target as Node)) {
			setOpen(false);
			onColorBlur();
		}
	};

	const onColorFocus = () => {
		setOpen(true);

		onFocus?.();
	};

	const onColorChange = (value: string) => {
		if (!canUpdate || !onChange) {
			return;
		}

		setCanUpdate(false);
		onChange(value === '#' ? '' : value);

		setTimeout(() => {
			setCanUpdate(true);
		}, 0);
	};

	const onColorBlur = () => {
		setOpen(false);

		onBlur?.();
	};

	const Picker = options?.withAlpha ? RgbaStringColorPicker : RgbStringColorPicker;

	return (
		<div className={classes.Color}>
			<Input
				name={name}
				type='text'
				label={label}
				info={info}
				prefix={
					<div className={classes.Prefix}>
						<div className={classes.Preview} style={{ backgroundColor: value || '' }} />#
					</div>
				}
				placeholder={placeholder || 'Choose a color..'}
				onFocus={onColorFocus}
				onChange={(val) => onColorChange(`#${val}`)}
				value={value?.replace('#', '') || ''}
				error={error}
			/>

			{open && (
				<div className={[classes.Wrapper, dark ? classes.Dark : null].join(' ')} ref={node}>
					<div className={classes.Content}>
						<Picker
							className='Picker'
							color={value ? HexToRGBA(value) : ''}
							onChange={(val) => onColorChange(RGBAToHex(val))}
						/>

						{presets?.length && (
							<ul className={classes.Presets}>
								{presets.map((preset) => (
									<li
										className={[
											classes.Preset,
											preset.value === value ? classes.Selected : null
										].join(' ')}
										style={{ backgroundColor: preset.value }}
										onClick={() => onColorChange(preset.value)}
										key={preset.label}>
										{preset.label && <Tooltip className={classes.Tooltip}>{preset.label}</Tooltip>}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Color;
