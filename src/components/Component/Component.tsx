import React from 'react';

import classes from './Component.module.scss';

interface Props {
	id: number;
	name: string;
	url?: string;
	selected?: boolean;
	onSelect: (id: number) => void;
}

const Component: React.FC<Props> = ({ id, name, url, selected, onSelect }) => {
	return (
		<div className={[classes.Component, selected ? classes.Selected : ''].join(' ')} onClick={() => onSelect(id)}>
			<h4 className={classes.Label}>{name}</h4>

			<div className={classes.Holder}>{url && <img className={classes.Image} src={url} alt={name} />}</div>
		</div>
	);
};

export default Component;
