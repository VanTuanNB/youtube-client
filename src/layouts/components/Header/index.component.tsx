import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import 'tippy.js/dist/tippy.css';

import { LogoApp, MenuIcon } from '@/components/Icons/index.component';

import styles from './Header.module.scss';
import PopperSearch from './PopperSearch/index.component';
import HeaderRight from './HeaderRight/index.component';
import { memo } from 'react';

const cx = classNames.bind(styles);

interface IPropsHeader {
    onClickMenu?: () => void;
}

function Header({ onClickMenu }: IPropsHeader) {
    return (
        <>
            <header className={cx('header')}>
                <div className={cx('left')}>
                    <div className={cx('header-menu')} onClick={onClickMenu}>
                        <MenuIcon className={cx('header-menu-button')} />
                    </div>
                    <Link to="/" className={cx('home-link')}>
                        <LogoApp className={cx('logo-app')} width="90px" height="20px" />
                    </Link>
                </div>
                {/* center */}
                <div className={cx('center')}>
                    <PopperSearch />
                </div>
                {/* right */}
                <div className={cx('right')}>
                    <HeaderRight />
                </div>
            </header>
        </>
    );
}

export default memo(Header);
