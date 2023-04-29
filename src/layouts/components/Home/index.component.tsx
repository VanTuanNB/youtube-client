import { useEffect, useState } from 'react';

import Crossbar from '@/components/Crossbar/index.component';
import RichVideo from '@/components/RichVideo/index.component';
import IVideo from '@/interfaces/IVideo';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { getAll } from '@/services/Video.service';
import IResponse from '@/interfaces/IResponse';
import LostConnectNetWork from '@/components/LostConnection/index.component';

import SkeletonLoading from '@/components/SkeletonLoading/index.component';

const cx = classNames.bind(styles);

function HomeComponent() {
    const [data, setData] = useState<Array<IVideo>>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [networkError, setNetworkError] = useState<boolean>(false);
    useEffect(() => {
        console.log(window.fetch);
        getAll()
            .then((response: IResponse) => response.data)
            .then((data: Array<IVideo>) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setNetworkError(true);
                console.log(error);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Crossbar />
            <div className={cx('contents')}>
                <div className={cx('wrapper-item')}>
                    <div className={cx('content-box')}>
                        <div className={cx('row')}>
                            {loading && <SkeletonLoading count={6} />}
                            {data.map((video) => (
                                <RichVideo video={video} key={video._id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {networkError && <LostConnectNetWork />}
        </div>
    );
}

export default HomeComponent;
// ngày mai làm loading UX còn lại
