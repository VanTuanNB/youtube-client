import { IAction, IState } from '@/interfaces/IStoreState';

export const initState: IState = {
    user: null,
};

export default function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                user: { ...action.payload },
            };

        default:
            return state;
    }
}
