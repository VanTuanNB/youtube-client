import classNames from 'classnames/bind';

import styles from './SuggestWatch.module.scss';
import Button from '@/components/Button/index.component';
import Suggest from '@/components/Suggest/index.component';
import IVideo from '@/interfaces/IVideo';
import { memo, useMemo } from 'react';

const cx = classNames.bind(styles);

interface IPropTypes {
    suggestedVideos: Array<IVideo>;
    videoActiveId?: string;
}

function SuggestWatch({ suggestedVideos, videoActiveId }: IPropTypes) {
    const shuffleSuggestedVideos = useMemo(() => {
        const filter = suggestedVideos.filter((video: IVideo) => video._id !== videoActiveId);
        return filter;
    }, [suggestedVideos, videoActiveId]);

    // const handleNavigate = useCallback((id: string) => {
    //     navigate('/watch?id='+ id);
    // }, []);

    return (
        <>
            <nav className={cx('nav-related-render')}>
                <Button active title="Tất cả" />
                <Button title="Của popkids" />
                <Button title="Video có liên quan" />
                <Button title="Tải lên gần đây" />
                <Button title="Dựa trên nội dung tìm kiếm" />
                <Button title="Đã xem" />
            </nav>
            <div className={cx('contents')}>
                {shuffleSuggestedVideos.map((video: IVideo) => (
                    <Suggest key={video._id} video={video} small />
                ))}
            </div>
        </>
    );
}

export default memo(SuggestWatch);
