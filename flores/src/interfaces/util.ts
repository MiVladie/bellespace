export type TClone<T> = {
	[P in keyof T]?: T[P];
};
