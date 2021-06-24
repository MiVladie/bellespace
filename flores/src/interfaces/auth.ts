export interface IUser {
	id: number;
	email: string;
	name: string;
}

export interface ICredentials {
	email: string;
	password: string;
	confirmPassword?: string;
}
