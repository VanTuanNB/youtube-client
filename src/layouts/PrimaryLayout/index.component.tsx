import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import classNames from 'classnames/bind';

import Header from '@/layouts/components/Header/index.component';
import Sidebar from '@/layouts/components/Sidebar/index.component';
import styles from './PrimaryLayout.module.scss';

const cx = classNames.bind(styles);

function PrimaryLayout({ children }: { children: ReactElement }) {
    const params = useMatch('/watch');
    const [showSidebar, setShowSidebar] = useState(!!params);

    const handleToggleSidebar = useCallback(() => {
        setShowSidebar((preState) => !preState);
    }, []);

    useEffect(() => {
        params ? setShowSidebar(true) : setShowSidebar(false);
    }, [params]);

    return (
        <>
            <Header onClickMenu={handleToggleSidebar} />
            <div className={cx('contents', !!params && 'watching')}>
                {!!params && (
                    <div onClick={() => setShowSidebar(true)} className={cx('overlay', !showSidebar && 'show')}></div>
                )}
                <Sidebar isUserWatching={showSidebar} layoutWatch={params} />
                {children}
            </div>
        </>
    );
}

export default PrimaryLayout;
