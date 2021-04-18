interface State {
	activePage: number | null;
	activeComponent: number | null;
	newPage: boolean;
	newComponent: boolean;
}

const activity: State = {
	activePage: null,
	activeComponent: null,
	newPage: false,
	newComponent: false
};

export default activity;
