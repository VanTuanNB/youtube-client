import { memo, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';

import styles from './HeaderRight.module.scss';
import {
    BellIcon,
    CameraIcon,
    OptionIcon,
    ProfileIcon,
    SignOutIcon,
    SwitchAccountIcon,
    UserIcon,
} from '@/components/Icons/index.component';
import { useStore } from '@/store/hooks';
import Button from '@/components/Button/index.component';
import Collapsible from '@/components/Collapsible/index.component';

const cx = classNames.bind(styles);

function HeaderRight() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, dispatch] = useStore();
    const [showAction, setShowAction] = useState<boolean>(false);

    const { user } = state;

    const handleUserOptions = () => {
        setShowAction((preState) => !preState);
    };

    return (
        <>
            {user ? (
                <>
                    <Tippy content="Tạo" offset={[2, 20]} arrow={false} placement="bottom">
                        <div className={cx('header-right-box')}>
                            <CameraIcon width="24px" height="24px" className={cx('header-right-icon')} />
                        </div>
                    </Tippy>
                    <Tippy content="Thông báo" offset={[8, 20]} arrow={false} placement="bottom">
                        <div className={cx('header-right-box', 'notify-box')}>
                            <BellIcon width="24px" height="24px" className={cx('header-right-icon')} />
                            <span className={cx('quantity-notify')}>3</span>
                        </div>
                    </Tippy>
                    <HeadlessTippy
                        interactive
                        visible={showAction}
                        render={(attrs) => (
                            <div className={cx('header-info-options')} {...attrs}>
                                <div className={cx('header-info-user')}>
                                    <div className={cx('header-avatar')}>
                                        <img src={user.avatarUrl} alt="" className={cx('header-avatar-img')} />
                                    </div>
                                    <div className={cx('header-infomations')}>
                                        <span className={cx('header-infomation-text', 'name')}>{user.username}</span>
                                        <span className={cx('header-information-text', 'nickname')}>
                                            @{user.nickname}
                                        </span>
                                        <Link to="#" className={cx('google-manage-link')}>
                                            Quản lý tài khoản Google của bạn
                                        </Link>
                                    </div>
                                </div>
                                <Collapsible />
                                <ul className={cx('header-info-options-list')}>
                                    <li className={cx('header-info-item')}>
                                        <Button
                                            to={'/@' + user.nickname}
                                            title="Kênh của bạn"
                                            icon={<ProfileIcon width="24px" height="24px" />}
                                        />
                                    </li>
                                    <li className={cx('header-info-item')}>
                                        <Button
                                            href="http://localhost:5000/api/auth/google/login"
                                            title="Chuyển đổi tài khoản"
                                            icon={<SwitchAccountIcon width="24px" height="24px" />}
                                        />
                                    </li>
                                    <li className={cx('header-info-item')}>
                                        <NavLink to={'/logout'}>
                                            <Button
                                                title="Đăng xuất"
                                                icon={<SignOutIcon width="24px" height="24px" />}
                                            />
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                        onClickOutside={() => setShowAction(false)}
                    >
                        <div className={cx('header-info')} onClick={handleUserOptions}>
                            <button className={cx('avatar-btn')}>
                                <img src={user.avatarUrl} alt="ewqewqe" className={cx('avatar-img')} />
                            </button>
                        </div>
                    </HeadlessTippy>
                </>
            ) : (
                <>
                    <div className={cx('header-options')}>
                        <OptionIcon className={cx('option-icon')} />
                    </div>
                    <a href="http://localhost:5000/api/auth/google/login" className={cx('header-login')}>
                        <UserIcon width="24px" height="24px" className={cx('user-icon')} />
                        <span className={cx('login-title')}>Đăng Nhập</span>
                    </a>
                </>
            )}
        </>
    );
}

export default memo(HeaderRight);
