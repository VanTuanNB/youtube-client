import { useCallback, useLayoutEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import classNames from 'classnames/bind';

import IUser from '@/interfaces/IUser';
import styles from './ProfileCreateVideo.module.scss';
import Form from '@/components/Form/index.component';
import { postVideoByUser } from '@/services/Video.service';
import IResponse from '@/interfaces/IResponse';

const cx = classNames.bind(styles);

function ProfileCreateVideo() {
    const { isLogin } = useOutletContext<{ isLogin: boolean; user: IUser }>();
    const navigate = useNavigate();
    useLayoutEffect(() => {
        if (!isLogin) return navigate(-1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogin]);

    const handleSubmit = useCallback(
        (data: {
            isSuccess: boolean;
            title: string;
            thumbnail: string;
            embed: { iframeUrl: string };
            category: string;
        }) => {
            if (data.isSuccess) {
                Object.defineProperty(data, 'isSuccess', {
                    set: function () {
                        this.isSuccess = null;
                    },
                });
                console.log(data);
                postVideoByUser(data)
                    .then((response: IResponse) => {
                        if (response.success) return alert('Thêm thành công video có title: ' + data.title);
                        return Promise.reject(response);
                    })
                    .catch((error) => console.log(error));
            } else {
                alert('Vui lòng nhập đầy đủ thông tin!');
            }
        },
        [],
    );

    return (
        <div className={cx('wrapper')}>
            <div className={cx('center')}>
                <h2 className={cx('title')}>Tạo mới video</h2>
                <Form onSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default ProfileCreateVideo;
