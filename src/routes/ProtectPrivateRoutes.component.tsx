import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { getInfoUserLoginCookie } from '@/utils/clientCookie.util';

function ProtectPrivateRoute({ children }: { children: ReactElement }) {
    const isLogin = getInfoUserLoginCookie();
    return <>{!!isLogin ? children : <Navigate to={'/'} />}</>;
}

export default ProtectPrivateRoute;
