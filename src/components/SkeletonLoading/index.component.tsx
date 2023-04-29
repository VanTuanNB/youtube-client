import classNames from 'classnames/bind';

import styles from './SkeletonLoading.module.scss';

const cx = classNames.bind(styles);

interface ISkeletonLoadingProps {
    count: number;
    small?: boolean;
}

function SkeletonLoading({ count, small = false }: ISkeletonLoadingProps) {
    return (
        <>
            {new Array(count).fill(0).map((cur, index: number) => (
                <div key={index} className={cx('col', small ? 'l-2' : 'l-4', 'wrapper')}>
                    <div className={cx('content')}>
                        <div className={cx('background')}>
                            <div className={cx('animation')}></div>
                        </div>
                        <div className={cx('below')}>
                            <div className={cx('avatar')}>
                                <div className={cx('animation')}></div>
                            </div>
                            <div className={cx('information')}>
                                <div className={cx('title')}>
                                    <div className={cx('animation')}></div>
                                </div>
                                <div className={cx('channel')}>
                                    <div className={cx('animation')}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default SkeletonLoading;
