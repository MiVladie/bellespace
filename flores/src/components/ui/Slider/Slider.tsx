import React from 'react';

import { ISlider } from 'interfaces/components/slider';
import { HelpOutline } from '@mui/icons-material';

import Dragger from 'rc-slider';
import Tooltip from 'components/ui/Tooltip/Tooltip';
import Input from '../Input/Input';

import 'rc-slider/assets/index.css';
import './Dragger.scss';

import classes from './Slider.module.scss';

const Slider: React.FC<ISlider> = ({
	name,
	label,
	info,
	marks,
	options,
	onFocus,
	onChange,
	onBlur,
	value,
	error,
	dark
}) => (
	<div className={classes.Slider} style={marks && { paddingBottom: '0.75rem' }}>
		{label && (
			<label className={classes.Label} htmlFor={name}>
				{label}
				{info && (
					<span className={classes.Info}>
						<HelpOutline />

						<Tooltip className={classes.Tooltip}>{info}</Tooltip>
					</span>
				)}
			</label>
		)}

		<div className={classes.Wrapper}>
			<Dragger
				className={['Dragger', dark ? 'Dark' : null].join(' ')}
				marks={marks}
				min={options?.min}
				max={options?.max}
				step={options?.step}
				onFocus={onFocus}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
			/>

			{options?.withInput && (
				<Input
					className={classes.Input}
					name='number'
					type='number'
					min={options?.min}
					max={options?.max}
					step={options?.step}
					placeholder={options?.min.toString() || '2'}
					onFocus={onFocus}
					onChange={(val) => onChange?.(+val)}
					onBlur={onBlur}
					value={value?.toString()}
					dark={dark}
				/>
			)}
		</div>

		{error && <small className={classes.Message}>{error}</small>}
	</div>
);

export default Slider;
