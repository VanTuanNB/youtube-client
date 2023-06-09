import { memo, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';

// component
import IResponse from '@/interfaces/IResponse';
import IVideo from '@/interfaces/IVideo';
import PrimaryWatch from './PrimaryWatch/index.component';
import SuggestWatch from './SuggestWatch/index.component';

// service
import { getVideoById, getAll } from '@/services/Video.service';

import styles from './Watch.module.scss';
import { SpinnerIcon } from '@/components/Icons/index.component';
import CustomProcessBar from '@/components/ProcessBar/index.component';
import LostConnectNetWork from '@/components/LostConnection/index.component';

const cx = classNames.bind(styles);

function Watch() {
    const [searchParam] = useSearchParams();
    const [data, setData] = useState<IVideo>();
    const [suggest, setSuggest] = useState<Array<IVideo>>([]);
    const [networkError, setNetworkError] = useState<boolean>(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (searchParam.get('id')) {
            getVideoById(searchParam.get('id') ?? '')
                .then((response: IResponse) => {
                    if (response.success) {
                        return Promise.resolve(response.data);
                    } else {
                        return Promise.reject(response);
                    }
                })
                .then((data) => {
                    setData(data);
                })
                .catch((error) => {
                    console.log(error);
                    if (navigator.onLine) {
                        navigate(-1);
                    } else {
                        navigate('/');
                    }
                });
        } else {
            navigate('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParam]);
    useEffect(() => {
        if (data) {
            getAll()
                .then((res: IResponse) => res.data)
                .then((data: Array<IVideo>) => setSuggest(data))
                .catch((error) => {
                    console.log(error);
                    setNetworkError(true);
                });
        }
    }, [data]);
    return (
        <>
            {!data && <CustomProcessBar />}
            {networkError ? (
                <LostConnectNetWork />
            ) : (
                <div className={cx('content')}>
                    <div className={cx('columns')}>
                        <div className={cx('primary')}>
                            {data ? (
                                <PrimaryWatch data={data} />
                            ) : (
                                <div className={cx('spinner-wrapper')}>
                                    <SpinnerIcon width="30px" height="30px" className={cx('spinner-icon')} />
                                </div>
                            )}
                        </div>
                        <div className={cx('secondary')}>
                            {suggest.length > 0 ? (
                                <SuggestWatch videoActiveId={data?._id} suggestedVideos={suggest} />
                            ) : (
                                <div className={cx('spinner-wrapper')}>
                                    <SpinnerIcon width="30px" height="30px" className={cx('spinner-icon')} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default memo(Watch);
