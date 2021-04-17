import React, { useEffect, useState } from 'react';

import classes from './Sidebar.module.scss';

interface Props {
	className?: string;
	visible?: boolean;
	reverse?: boolean;
	children: React.ReactNode;
}

const Sidebar: React.FC<Props> = ({ className, visible = true, reverse, children }) => {
	const [width, setWidth] = useState<number>(window.innerWidth);
	const [snapped, setSnapped] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener('resize', () => setWidth(window.innerWidth));

		return () => window.removeEventListener('resize', () => setWidth(window.innerWidth));
	}, []);

	useEffect(() => {
		if (!visible) {
			setSnapped(false);
		}
	}, [visible]);

	useEffect(() => {
		if (width < 720 && snapped) {
			setSnapped(false);
		}
	}, [width, snapped]);

	const snapClickHandler = () => {
		if (width >= 720) {
			setSnapped((prevState) => !prevState);
		}
	};

	return (
		<div
			className={[
				classes.Sidebar,
				snapped ? classes.Snapped : null,
				reverse ? classes.Reverse : null,
				!visible ? classes.Hidden : null,
				className
			].join(' ')}>
			{children}

			<div className={classes.Toggle} onClick={snapClickHandler}>
				<span className={classes.Hook} />
			</div>
		</div>
	);
};

export default Sidebar;
