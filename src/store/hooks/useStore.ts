import { useContext } from 'react';
import { IAction, IState } from '@/interfaces/IStoreState';
import { StoreContext } from '../contexts/index.context';

export default function useStore(): [IState, React.Dispatch<IAction>] {
    const [state, dispatch] = useContext(StoreContext);
    return [state, dispatch];
}
