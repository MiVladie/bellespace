import React from 'react';

import { IComponent } from 'interfaces/components/component';

import Component from 'components/Component/Component';

import classes from './Components.module.scss';

interface Props {
	className?: string;
	data: IComponent[];
	onSelect: (id: string | null) => void;
	selected: string | null;
}

const Components: React.FC<Props> = ({ className, data, onSelect, selected }) => (
	<div className={[classes.Components, className].join(' ')}>
		{data.map((component) => (
			<Component
				id={component.id}
				name={component.name}
				src={component.src}
				onSelect={(id) => onSelect(id === selected ? null : id)}
				selected={component.id === selected}
				key={component.id}
			/>
		))}
	</div>
);

export default Components;
