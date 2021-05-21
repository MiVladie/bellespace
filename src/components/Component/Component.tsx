import React from 'react';

import classes from './Component.module.scss';

interface IComponent {
	id: string;
	name: string;
	src?: string;
}

interface Props extends IComponent {
	selected?: boolean;
	onSelect: (id: string) => void;
}

const Component: React.FC<Props> = ({ id, name, src, selected, onSelect }) => (
	<div className={[classes.Component, selected ? classes.Selected : ''].join(' ')} onClick={() => onSelect(id)}>
		<h4 className={classes.Label}>{name}</h4>

		<div className={classes.Holder}>{src && <img className={classes.Image} src={src} alt={name} />}</div>
	</div>
);

export default Component;
