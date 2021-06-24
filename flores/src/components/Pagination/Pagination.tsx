import React from 'react';

import classes from './Pagination.module.scss';

interface Props {
	pages: number;
	page: number;
	onClick: (page: number) => void;
	className?: string;
	disabled?: boolean;
	visible?: boolean;
	dark?: boolean;
}

const Pagination: React.FC<Props> = ({ pages, page, onClick, className, disabled, visible = true, dark }) => {
	if (!visible) {
		return null;
	}

	return (
		<div
			className={[
				classes.Pagination,
				dark ? classes.Dark : null,
				disabled ? classes.Disabled : null,
				className
			].join(' ')}>
			{new Array(pages).fill(undefined).map((_, index) => (
				<div
					key={index}
					className={[classes.Page, index + 1 === page ? classes.Active : null].join(' ')}
					onClick={() => !disabled && page !== index + 1 && onClick(index + 1)}
				/>
			))}
		</div>
	);
};

export default Pagination;
