import { ReactNode, createContext, useLayoutEffect, useReducer } from 'react';

import reducer, { initState } from '../reducers/index.reducer';
import { IAction, IState } from '@/interfaces/IStoreState';
import { getInfoUserLoginCookie } from '@/utils/clientCookie.util';
import { getUserById } from '@/services/User.service';
import { userLoginAction } from '../actions/index.action';
import IResponse from '@/interfaces/IResponse';

const initDispatch: React.Dispatch<IAction> = () => {};
const initContext: [IState, React.Dispatch<IAction>] = [initState, initDispatch];
export const StoreContext = createContext(initContext);

function StoreProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initState);
    useLayoutEffect(() => {
        const data = getInfoUserLoginCookie();
        if (data) {
            getUserById(data.sub)
                .then((response: IResponse) => {
                    if (response.success) return dispatch(userLoginAction(response.data));
                    return Promise.reject(response);
                })
                .catch((error) => {
                    console.log(error);
                    dispatch(userLoginAction(null));
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <StoreContext.Provider value={[state, dispatch]}>{children}</StoreContext.Provider>;
}

export default StoreProvider;
