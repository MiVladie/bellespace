import React, { useEffect, useRef, useState } from 'react';

import classes from './Accordion.module.scss';

interface Props {
	className?: string;
	expanded: boolean;
	children: React.ReactNode;
}

const Accordion: React.FC<Props> = ({ className, expanded, children }) => {
	const [height, setHeight] = useState<number>(0);

	const content = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (expanded) {
			setHeight(content.current!.scrollHeight);
		} else {
			setHeight(0);
		}
	}, [expanded]);

	return (
		<section className={classes.Accordion} style={{ height }} ref={content}>
			<div className={className}>{children}</div>
		</section>
	);
};

export default Accordion;
