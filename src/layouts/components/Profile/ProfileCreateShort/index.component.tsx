import classNames from 'classnames/bind';
import { useCallback, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

import Form from '@/components/Form/index.component';
import styles from './ProfileCreateShort.module.scss';
import IUser from '@/interfaces/IUser';
import { postShortStream } from '@/services/Short.service';
import IResponse from '@/interfaces/IResponse';

const cx = classNames.bind(styles);

function ProfileCreateShort() {
    const { isLogin } = useOutletContext<{ isLogin: boolean; user: IUser }>();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLogin) return navigate(-1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogin]);

    const handleSubmit = useCallback(
        (data: { isSuccess: boolean; shortTitle: string; file: FileList; thumbnail: string }) => {
            if (data.isSuccess) {
                Object.defineProperty(data, 'isSuccess', {
                    set: function () {
                        this.isSuccess = null;
                    },
                });
                postShortStream({ title: data.shortTitle, file: data.file[0], thumbnail: data.thumbnail })
                    .then((response: IResponse) => {
                        if (response.success) return alert('Bạn đã đăng video ngắn có tiêu đề: ' + data.shortTitle);
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
                <h2 className={cx('title')}>Tạo mới video short</h2>
                <Form isFormShort onSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default ProfileCreateShort;
