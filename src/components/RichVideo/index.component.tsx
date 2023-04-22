import IVideo from '@/interfaces/IVideo';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { CheckIcon } from '../Icons/index.component';
import styles from './RichVideo.module.scss';

const cx = classNames.bind(styles);

function RichVideo({ video, small = false }: { video: IVideo; small?: boolean }) {
    return (
        <div className={cx('col', small ? 'l-2' : 'l-4', 'wrapper')}>
            <div className={cx('content')}>
                <Link to={'/watch?id=' + video._id} className={cx('thumbnail-media-link')}>
                    <div className={cx('thumbnail')}>
                        <img src={video.thumbnail} alt="" className={cx('thumbnail-img')} />
                    </div>
                    <div className={cx('media-informations')}>
                        {!small && (
                            <div className={cx('media-avatar')}>
                                <div className={cx('media-link-current-channel')}>
                                    <img
                                        src={video.resourceOwner.avatarUrl}
                                        alt=""
                                        className={cx('current-channel-img')}
                                    />
                                </div>
                            </div>
                        )}
                        <div className={cx('media-info')}>
                            <h3 className={cx('media-info-title', small && 'small')}>{video.title}</h3>
                            <div className={cx('channel-info')}>
                                <div className={cx('current-name-channel', small && 'small')}>
                                    {video.resourceOwner.username}
                                </div>
                                <span className={cx('check-icon')}>
                                    <CheckIcon fill="#aaa" />
                                </span>
                            </div>
                            <div className={cx('statistics-info')}>
                                <span
                                    className={cx('current-name-channel', 'statistics-quantity-view', small && 'small')}
                                >
                                    {video.viewCount || '0'} lượt xem
                                </span>
                                <span
                                    className={cx('current-name-channel', 'statistics-quantity-time', small && 'small')}
                                >
                                    {'13/02/2023'}
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default RichVideo;
