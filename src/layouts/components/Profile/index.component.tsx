import { MouseEvent, useEffect, useMemo, useRef, useState } from 'react';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';

import Collapsible from '@/components/Collapsible/index.component';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { getUserByNickname } from '@/services/User.service';
import IResponse from '@/interfaces/IResponse';
import IUser from '@/interfaces/IUser';
import { useStore } from '@/store/hooks';

const cx = classNames.bind(styles);

function Profile() {
    const params = useParams();
    const navigate = useNavigate();
    const lineRef: any = useRef(null);
    const [channel, setChannel] = useState<IUser>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, dispatch] = useStore();
    const { user } = state;

    const slugNicknameChannel: string | undefined = useMemo(() => {
        const isValid = params.nickname?.startsWith('@');
        if (!isValid) return '';
        const slugNickname = params.nickname?.slice(1);
        return slugNickname;
    }, [params]);

    useEffect(() => {
        console.log(slugNicknameChannel);
        if (!slugNicknameChannel) return navigate('/error');
        getUserByNickname(slugNicknameChannel)
            .then((response: IResponse) => {
                if (response.success) return setChannel(response.data);
                return Promise.reject(response);
            })
            .catch((err: any) => {
                console.log(err);
                navigate('/error');
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slugNicknameChannel]);

    const handleNavigatedLink = (e: MouseEvent): void => {
        const DOMReact = e.currentTarget.getBoundingClientRect();
        const leftFirstElement: number | undefined =
            e.currentTarget.parentElement?.children[0].getBoundingClientRect().left;
        lineRef.current.style.left = (DOMReact.left - (leftFirstElement ?? 0)).toFixed(1) + 'px';
        lineRef.current.style.width = DOMReact.width.toFixed(1) + 'px';
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-profile')}>
                <header className={cx('profile-header')}>
                    <div className={cx('header-avatar')}>
                        <img src={channel?.avatarUrl} alt="" className={cx('header-avatar-img')} />
                    </div>
                    <div className={cx('header-info')}>
                        <h3 className={cx('header-info-channel-name')}>{channel?.username}</h3>
                        <span className={cx('header-info-channel-sub-text')}>@{channel?.nickname}</span>
                        <span className={cx('header-info-channel-sub-text')}>{0} người đăng ký</span>
                    </div>
                </header>
                <nav className={cx('navbar-options')}>
                    <ul className={cx('navbar-list-options')}>
                        <li data-index onClick={(e) => handleNavigatedLink(e)} className={cx('navbar-option-item')}>
                            <NavLink to={`/@${slugNicknameChannel}`} className={cx('navbar-option-item-link')}>
                                Trang chủ
                            </NavLink>
                        </li>
                        {user?._id === channel?._id && (
                            <li onClick={(e) => handleNavigatedLink(e)} className={cx('navbar-option-item', 'active')}>
                                <NavLink
                                    to={`/@${slugNicknameChannel}/create`}
                                    className={cx('navbar-option-item-link')}
                                >
                                    Thêm video
                                </NavLink>
                            </li>
                        )}
                        {user?._id === channel?._id && (
                            <li onClick={(e) => handleNavigatedLink(e)} className={cx('navbar-option-item', 'active')}>
                                <NavLink
                                    to={`/@${slugNicknameChannel}/create-short`}
                                    className={cx('navbar-option-item-link')}
                                >
                                    Thêm short
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
                <div className={cx('width-bar-wrapper')}>
                    <div ref={lineRef} className={cx('width-bar-size')}></div>
                </div>
                <Collapsible />
                <div className={cx('contents')}>
                    {channel && <Outlet context={{ isLogin: user?._id === channel?._id, user: channel }} />}
                </div>
            </div>
        </div>
    );
}

export default Profile;
