export interface IUser {
	id: number;
	name: string;
	email: string;
}

export interface ICredentials {
	email: string;
	password: string;
	confirmPassword?: string;
}
