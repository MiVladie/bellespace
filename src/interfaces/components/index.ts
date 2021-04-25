export interface IField<T> {
	name: string;
	label?: string;
	info?: React.ReactNode;
	onChange: (value: T) => void;
	onFocus?: () => void;
	onBlur?: () => void;
	value: T;
	error?: string | null;
	dark?: boolean;
}

export interface ICommonRules<T> {
	required?: boolean;
	custom?: (value: T) => string | false;
}
