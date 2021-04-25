import { ICommonRules } from '.';

export interface IRules extends ICommonRules<string | number> {
	isURL?: boolean;
	isRoute?: boolean;
}
