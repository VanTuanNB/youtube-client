import IUser from './IUser';

export interface IAction {
    type: string;
    payload?: any;
}

export interface IState {
    user: IUser | null;
}
