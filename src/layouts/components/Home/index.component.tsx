import { useEffect, useState } from 'react';

import Crossbar from '@/components/Crossbar/index.component';
import RichVideo from '@/components/RichVideo/index.component';
import IVideo from '@/interfaces/IVideo';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { getAll } from '@/services/Video.service';
import IResponse from '@/interfaces/IResponse';

const cx = classNames.bind(styles);

function HomeComponent() {
    const [data, setData] = useState<Array<IVideo>>();
    useEffect(() => {
        getAll()
            .then((response: IResponse) => response.data)
            .then((data: Array<IVideo>) => {
                setData(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Crossbar />
            <div className={cx('contents')}>
                <div className={cx('wrapper-item')}>
                    <div className={cx('content-box')}>
                        <div className={cx('row')}>
                            {data?.map((video) => (
                                <RichVideo video={video} key={video._id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;
