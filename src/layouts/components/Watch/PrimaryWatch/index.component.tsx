import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './PrimaryWatch.module.scss';
import IVideo from '@/interfaces/IVideo';
import {
    BellIcon,
    DislikeIcon,
    DownArrowIcon,
    DownloadIcon,
    LikeIcon,
    ShareIcon,
    ThreeDotIcon,
} from '@/components/Icons/index.component';

const cx = classNames.bind(styles);

interface IPropsTypes {
    data: IVideo;
}

function PrimaryWatch({ data }: IPropsTypes) {
    const isSubscribed = false;
    return (
        <>
            <div className={cx('primary-inner')}>
                <div className={cx('primary-media')}>
                    <iframe
                        className={cx('primary-video')}
                        width="560"
                        height="315"
                        src={data.embed.iframeUrl}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className={cx('primary-below')}>
                <div className={cx('primary-metadata')}>
                    <h1 className={cx('primary-video-title')}>{data.title}</h1>
                    <div className={cx('primary-info-channel')}>
                        <div className={cx('info-channel-left-box')}>
                            <Link to={'/@' + data.resourceOwner.nickname} className={cx('info-left-avatar-link')}>
                                <div className={cx('info-left-avatar')}>
                                    <img src={data.resourceOwner.avatarUrl} alt="" className={cx('info-left-img')} />
                                </div>
                            </Link>
                            <div className={cx('info-left-avatar-string')}>
                                <Link
                                    to={'/' + data.resourceOwner.nickname}
                                    className={cx('info-left-avatar-link-name')}
                                >
                                    {data.resourceOwner.username}
                                </Link>
                                <span className={cx('info-left-quantity-subscribes')}>{300} người đăng ký</span>
                            </div>
                            <div className={cx('info-left-wrapper-subscribes')}>
                                <button className={cx('btn-subscription', isSubscribed && 'has-subscribe')}>
                                    {isSubscribed ? (
                                        <div className={cx('btn-has-subscribe')}>
                                            <div className={cx('notify-icon')}>
                                                <BellIcon width="24px" height="24px" />
                                            </div>
                                            <span className={cx('has-subscribe-title')}>Đã đăng ký</span>
                                            <div className={cx('more-icon')}>
                                                <DownArrowIcon width="24px" height="24px" />
                                            </div>
                                        </div>
                                    ) : (
                                        <span>Đăng ký</span>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className={cx('info-channel-right-box')}>
                            <div className={cx('wrapper-reaction')}>
                                <button className={cx('btn-like')}>
                                    <LikeIcon className={cx('action-icon')} width="24px" height="24px" />
                                    <span className={cx('action-title')}>605</span>
                                </button>
                                <button className={cx('btn-dislike')}>
                                    <DislikeIcon width="24px" height="24px" />
                                </button>
                            </div>
                            <button className={cx('same-layout', 'share-media')}>
                                <ShareIcon className={cx('action-icon')} width="24px" height="24px" />
                                <span className={cx('action-title')}>Chia sẻ</span>
                            </button>
                            <button className={cx('same-layout', 'download-media')}>
                                <DownloadIcon className={cx('action-icon')} width="24px" height="24px" />
                                <span className={cx('action-title')}>Tải xuống</span>
                            </button>
                            <button className={cx('same-layout', 'more-options')}>
                                <ThreeDotIcon className={cx('action-icon')} width="24px" height="24px" />
                            </button>
                        </div>
                    </div>
                    <div className={cx('description-media-box')}>
                        <div className={cx('description-inner')}>
                            <div className={cx('paragraph')}>
                                <span className={cx('text-info-view', 'quantity-view')}>
                                    {data.viewCount || '0'} lượt xem
                                </span>
                                <span className={cx('text-info-view', 'ml-6', 'release-date')}>1 thg 11, 2022</span>
                                <Link to={'/'} className={cx('hashtag-link', 'ml-3')}>
                                    #Levi
                                </Link>
                                <Link to={'/'} className={cx('hashtag-link', 'ml-3')}>
                                    #LMHT
                                </Link>
                                <Link to={'/'} className={cx('hashtag-link', 'ml-3')}>
                                    #LOL
                                </Link>
                            </div>
                            <p className={cx('paragraph')}>{'eqweqweqweqweqwewqewq'}</p>
                        </div>
                        <div className={cx('description-social')}></div>
                    </div>
                    <div className={cx('comment-component')}>
                        <div className={cx('bans-comment')}>
                            <span className={cx('bans-text-string')}>Tính năng bình luận đã tắt.</span>
                            <Link to={'/'} className={cx('find-out-more')}>
                                Tìm hiểu thêm
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(PrimaryWatch);
