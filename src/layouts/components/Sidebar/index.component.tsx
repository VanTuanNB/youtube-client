import { Fragment, memo } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import LinkSection from '@/components/LinkSection/index.component';
import { DownArrowIcon } from '@/components/Icons/index.component';
import Collapsible from '@/components/Collapsible/index.component';
import Button from '@/components/Button/index.component';
import Footer from '../Footer/index.component';
import {
    categories,
    categoriesAction,
    discovers,
    ICategory,
    subscribesUser,
    youtubeServices,
} from '@/services/Category.service';
import { PathMatch } from 'react-router-dom';

const cx = classNames.bind(styles);

interface IPropsSidebar {
    isUserWatching?: boolean;
    layoutWatch?: PathMatch<string> | null;
}

function Sidebar({ isUserWatching, layoutWatch }: IPropsSidebar) {
    return (
        <div
            className={cx(
                isUserWatching ? (layoutWatch ? 'sidebar-position' : 'hide-sidebar') : 'sidebar',
                layoutWatch && 'sidebar-with-position',
            )}
        >
            <div className={cx('sidebar-wrapper')}>
                <div className={cx('sidebar-top')}>
                    <ul className={cx('sidebar-options-list')}>
                        {categories.map((category: ICategory, index: number) => (
                            <Fragment key={index}>
                                <li key={index} className={cx('sidebar-options-item', index === 0 && 'active')}>
                                    <LinkSection
                                        path={category.path}
                                        icon={category.icon}
                                        iconActive={category.activeIcon}
                                        title={category.title}
                                    />
                                </li>
                                {index === 2 && <Collapsible />}
                            </Fragment>
                        ))}
                    </ul>
                </div>
                <Collapsible />
                <div className={cx('sidebar-subscribed')}>
                    <h3 className={cx('sidebar-title')}>Kênh đăng ký</h3>
                    <ul>
                        {subscribesUser.map((subscribes: ICategory, index: number) => (
                            <li key={index} className={cx('sidebar-options-item')}>
                                <LinkSection
                                    path={subscribes.path}
                                    avatar={subscribes.avatar}
                                    title={subscribes.title}
                                />
                            </li>
                        ))}
                    </ul>
                    <div className={cx('btn-load-user-subscribes')}>
                        <Button title="Hiển thị thêm" icon={<DownArrowIcon width="24px" height="24px" />} />
                    </div>
                </div>
                <Collapsible />
                <div className={cx('sidebar-discoveries')}>
                    <h3 className={cx('sidebar-title')}>Khám Phá</h3>
                    <ul>
                        {discovers.map((discover: ICategory, index: number) => (
                            <li key={index} className={cx('sidebar-options-item')}>
                                <LinkSection
                                    path={discover.path}
                                    icon={discover.icon}
                                    iconActive={discover.activeIcon}
                                    title={discover.title}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <Collapsible />
                <div className={cx('sidebar-service-youtube')}>
                    <h3 className={cx('sidebar-title')}>Dịch vụ khác của YouTube</h3>
                    <ul>
                        {youtubeServices.map((service: ICategory, index: number) => (
                            <li key={index} className={cx('sidebar-options-item')}>
                                <LinkSection path={service.path} icon={service.icon} title={service.title} />
                            </li>
                        ))}
                    </ul>
                </div>
                <Collapsible />
                <div className={cx('sidebar-action')}>
                    <ul>
                        {categoriesAction.map((action: ICategory, index: number) => (
                            <li key={index} className={cx('sidebar-options-item')}>
                                <LinkSection
                                    path={action.path}
                                    icon={action.icon}
                                    iconActive={action.activeIcon}
                                    title={action.title}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <Collapsible />
                <Footer />
            </div>
        </div>
    );
}

export default memo(Sidebar);
