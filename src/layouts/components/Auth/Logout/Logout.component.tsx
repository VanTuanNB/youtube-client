import { memo, useEffect } from 'react';
import classNames from 'classnames/bind';

import { logoutService } from '@/services/Auth.service';
import styles from './Logout.module.scss';
import { SpinnerIcon } from '@/components/Icons/index.component';
import IResponse from '@/interfaces/IResponse';
import { getInfoUserLoginCookie } from '@/utils/clientCookie.util';

const cx = classNames.bind(styles);

function Logout() {
    useEffect(() => {
        const userInfo = getInfoUserLoginCookie();
        if (userInfo) {
            logoutService(userInfo.accessToken)
                .then((response: IResponse) => {
                    if (response.success) return (window.location.href = 'http://localhost:3000');
                    return Promise.reject(response);
                })
                .catch((error) => {
                    console.log(error);
                    alert('Có lỗi khi đăng xuất, xin vui lòng thử lại sau');
                    return (window.location.href = 'http://localhost:3000');
                });
        }
    }, []);

    return (
        <div className={cx('wrapper')}>
            <SpinnerIcon width="40px" height="40px" className={cx('spinner-icon')} />
        </div>
    );
}

export default memo(Logout);
