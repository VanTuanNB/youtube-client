import { memo } from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import { CheckIcon } from '../Icons/index.component';
import styles from './Suggest.module.scss';
import IVideo from '@/interfaces/IVideo';
import formattingDate from '@/helpers/formattingDate.helper';

const cx = classNames.bind(styles);

interface IPropsSuggest {
    small?: boolean;
    large?: boolean;
    video: IVideo;
}

function Suggest({ small, large, video }: IPropsSuggest) {
    return (
        <div className={cx('content', small && 'small', large && 'large', !small && !large && 'medium')}>
            <NavLink to={'/watch?id=' + video._id} className={cx('release-video-link')}>
                <div className={cx('media')}>
                    <div className={cx('thumbnail')}>
                        <img src={video.thumbnail} alt="" className={cx('thumbnail-img')} />
                    </div>
                </div>
                <div className={cx('information')}>
                    <h3 className={cx('title-video')}>{video.title}</h3>
                    {large && (
                        <div className={cx('below-info-channel')}>
                            <span className={cx('info-chanel-quantity-view')}>{video.viewCount} lượt xem</span>
                            <span className={cx('info-chanel-realed-date')}>
                                {formattingDate(video.updatedAt ?? new Date())}
                            </span>
                        </div>
                    )}
                    <div className={cx('below-title')}>
                        {small ? (
                            <span className={cx('name-channel')}>{video.resourceOwner.username}</span>
                        ) : (
                            <div className={cx('info-current-channel-video')}>
                                <div className={cx('link-chanel')}>
                                    {' '}
                                    {/* a tag link */}
                                    <div className={cx('channel-thumbnail')}>
                                        <img
                                            src={video.resourceOwner.avatarUrl}
                                            alt=""
                                            className={cx('avatar-channel')}
                                        />
                                    </div>
                                    <span className={cx('name-channel')}>{video.resourceOwner.username}</span>
                                </div>
                            </div>
                        )}

                        <div className={cx('check-icon')}>
                            <CheckIcon />
                        </div>
                    </div>
                    {large && <div className={cx('info-current-channel-video-description')}>{'eqweqweqweqwe'}</div>}
                    {small && (
                        <div className={cx('below-info-channel')}>
                            <span className={cx('info-chanel-quantity-view')}>{video.viewCount} N lượt xem</span>
                            <span className={cx('info-chanel-realed-date')}>
                                {formattingDate(video.updatedAt ?? new Date())}
                            </span>
                        </div>
                    )}
                    <div className={cx('stickers-new')}>
                        <div className={cx('stickers-new-box')}>
                            <span className={cx('stickers-new-title')}>mới</span>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default memo(Suggest);
