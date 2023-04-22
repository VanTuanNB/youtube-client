import classNames from 'classnames/bind';

import styles from './ShortAction.module.scss';
import {
    CommentIconActive,
    DislikeIconActive,
    LikeIconActive,
    ShareIconActive,
    ThreeDotIcon,
} from '@/components/Icons/index.component';
import { memo } from 'react';
import IShort from '@/interfaces/IShorts';
const cx = classNames.bind(styles);

function ShortAction({ likeCount, owner }: Pick<IShort, 'likeCount' | 'owner'>) {
    return (
        <div className={cx('short-action')}>
            <label className={cx('label-button')}>
                <button className={cx('btn-action')}>
                    <LikeIconActive width="24px" height="24px" />
                </button>
                <span className={cx('action-title')}>{likeCount || '0'}</span>
            </label>
            <label className={cx('label-button')}>
                <button className={cx('btn-action')}>
                    <DislikeIconActive width="24px" height="24px" />
                </button>
                <span className={cx('action-title')}>Không thích</span>
            </label>
            <label className={cx('label-button')}>
                <button className={cx('btn-action')}>
                    <CommentIconActive width="24px" height="24px" />
                </button>
                <span className={cx('action-title')}>93</span>
            </label>
            <label className={cx('label-button')}>
                <button className={cx('btn-action')}>
                    <ShareIconActive width="24px" height="24px" />
                </button>
                <span className={cx('action-title')}>Chia sẻ</span>
            </label>
            <label className={cx('label-button')}>
                <button className={cx('btn-action')}>
                    <ThreeDotIcon width="24px" height="24px" />
                </button>
            </label>
            <label className={cx('label-button')}>
                <div className={cx('avatar-action')}>
                    <img src={owner.avatarUrl} alt="" className={cx('avatar-action-img')} />
                </div>
            </label>
        </div>
    );
}

export default memo(ShortAction);
