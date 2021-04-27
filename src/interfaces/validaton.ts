// export interface IValidatable {
// 	name: string;
// 	value: string;
// 	rules?: IRule;
// }

// export type IRule = {
// 	[key: string]: string | number | boolean | ((e: any) => string | boolean);
// };

export interface ICommonRules<T> {
	required?: boolean;
	custom?: (value: T) => string | false;
}

export type TError<T> = {
	[key in keyof T]?: string;
};
