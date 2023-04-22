import { IAction } from '@/interfaces/IStoreState';
import IUser from '@/interfaces/IUser';
export const userLoginAction = (payload: IUser | null): IAction => {
    return {
        type: 'USER_LOGIN',
        payload,
    };
};
