import classNames from 'classnames/bind';

import styles from './Short.module.scss';
import ShortContent from '@/components/ShortContent/index.component';
import IShort from '@/interfaces/IShorts';
import { useEffect, useState } from 'react';
import { getAllShort } from '@/services/Short.service';
import IResponse from '@/interfaces/IResponse';
import CustomProcessBar from '@/components/ProcessBar/index.component';

const cx = classNames.bind(styles);

function Short() {
    const [shorts, setShorts] = useState<Array<IShort>>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getAllShort()
            .then((response: IResponse) => response.data)
            .then((data: Array<IShort>) => setShorts(data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <div className={cx('wrapper')}>
            {loading && <CustomProcessBar />}
            {!loading && (
                <div className={cx('contents')}>
                    <div className={cx('short-view')}>
                        {shorts.map((short: IShort) => (
                            <ShortContent key={short._id} data={short} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

// ngày mai tìm hiểu về thằng Intersection Observer -> xem chi tiết;
//  sau đó cấu trúc lại thư mục short cho gọn gàng
// tiếp theo -> lấy data từ api -> render ra view;

export default Short;
