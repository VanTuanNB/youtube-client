import { memo, useEffect, useState } from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './HomeProfile.module.scss';
import IUser from '@/interfaces/IUser';
import IVideo from '@/interfaces/IVideo';
import { getAllVideoByUserId } from '@/services/Video.service';
import IResponse from '@/interfaces/IResponse';
import RichVideo from '@/components/RichVideo/index.component';
import SkeletonLoading from '@/components/SkeletonLoading/index.component';

const cx = classNames.bind(styles);

function HomeProfile() {
    const { isLogin, user } = useOutletContext<{ isLogin: boolean; user: IUser }>();
    const [videos, setVideos] = useState<Array<IVideo>>([]);
    const [hasVideo, setHasVideo] = useState<boolean>(false);
    const [skeletonLoading, setSkeletonLoading] = useState<boolean>(true);
    useEffect(() => {
        getAllVideoByUserId(user._id)
            .then((response: IResponse) => {
                if (response.success) {
                    setHasVideo(true);
                    setSkeletonLoading(false);
                    return setVideos(response.data);
                }
                return Promise.reject(response);
            })
            .catch((error) => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('row', 'sm-gutter')}>
                    {skeletonLoading && <SkeletonLoading small count={6} />}
                    {!skeletonLoading &&
                        videos.map((video: IVideo) => <RichVideo small key={video._id} video={video} />)}
                </div>
                {!skeletonLoading && (user && videos.length) === 0 && (
                    <div className={cx('none-box')}>
                        <div className={cx('none-thumbnail')}>
                            <img
                                src="https://www.gstatic.com/youtube/img/channels/empty_channel_dark_illustration.svg"
                                alt=""
                                className={cx('none-img')}
                            />
                        </div>
                        {isLogin && hasVideo && (
                            <div className={cx('title-my-info')}>
                                <p className={cx('header-text-info')}>Tải một video lên để bắt đầu</p>
                                <p className={cx('sub-title')}>
                                    Bắt đầu chia sẻ câu chuyện của bạn và kết nối với người xem. Các video mà bạn tải
                                    lên sẽ xuất hiện ở đây.
                                </p>
                                <NavLink className={cx('link')} to={`/@${user.nickname}/create`}>
                                    Tạo ngay
                                </NavLink>
                            </div>
                        )}
                        {!isLogin && hasVideo && (
                            <div>
                                <p>Kênh của {user.username} không có video nào! Hãy xem các kênh khác</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default memo(HomeProfile);
