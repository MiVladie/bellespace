import { initStore } from './store';

export const configureStore = () => {
    const actions = {
        MODIFY_PAGE: (curState, payload) => {
            return { ...curState, ...payload };
        },
        REMOVE_PAGE: (curState, payload) => {
            return { ...curState, ...payload };
        }
    }

    initStore(actions, { 
        pages: [
            { 
                name: 'Home',
                url: '/',
                content: [] 
            }
        ]
    });
};
