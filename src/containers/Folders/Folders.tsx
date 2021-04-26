import React, { useState } from 'react';

import { IFolder } from 'interfaces/components/folder';
import { AddRounded, RemoveRounded } from '@material-ui/icons';

import Accordion from 'components/ui/Accordion/Accordion';

import classes from './Folders.module.scss';

type Props<T, U> = {
	data: IFolder[];
	onChange: (e: T) => void;
	onErrors: (e: T) => void;
	values: T;
	errors: U;
};

const Folders = <T, U>({ data, values }: Props<T, U>) => {
	const [open, setOpen] = useState<number[]>([]);

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

	return (
		<ul className={classes.Folders}>
			{data.map((item, index) => (
				<li className={classes.Folder} key={item.name}>
					<div className={classes.Section} onClick={() => onExpand(index)}>
						<h3 className={classes.Name}>{item.name}</h3>

						{isOpen(index) ? <RemoveRounded /> : <AddRounded />}
					</div>

					<Accordion className={classes.Content} expanded={isOpen(index)}>
						<pre>{JSON.stringify(values, null, 2)}</pre>
					</Accordion>
				</li>
			))}
		</ul>
	);
};

export default Folders;
