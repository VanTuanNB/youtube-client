import { ReactElement } from 'react';
import classNames from 'classnames/bind';

import styles from './LinkSection.module.scss';
import { NavLink } from 'react-router-dom';

interface ILinkProps {
    path?: string;
    title: string;
    avatar?: string;
    icon?: ReactElement;
    iconActive?: ReactElement;
    active?: boolean;
}

const cx = classNames.bind(styles);
function LinkSection({ path, title, avatar, icon, iconActive }: ILinkProps) {
    const handleActiveClassName = ({ isActive }: { isActive: boolean }) => {
        if (isActive) {
            return cx('active', 'section-link-item');
        } else {
            return cx('section-link-item');
        }
    };

    return (
        <NavLink to={path ?? '/'} className={handleActiveClassName}>
            {avatar ? (
                <div className={cx('wrapper', avatar && 'wrapper-avatar')}>
                    <img src={avatar} alt="default-img" className={cx('img-avatar')} />
                </div>
            ) : (
                <>
                    <div className={cx('wrapper-icon-active')}>{iconActive || icon}</div>
                    <div className={cx('wrapper-icon')}>{icon}</div>
                </>
            )}
            <span className={cx('link-title')}>{title}</span>
        </NavLink>
    );
}

export default LinkSection;
