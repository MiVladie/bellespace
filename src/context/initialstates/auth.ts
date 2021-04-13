import { IUser } from 'interfaces';

interface State {
	user: IUser | null;
	token: string | null;
}

const user: State = {
	user: null,
	token: null
};

export default user;
