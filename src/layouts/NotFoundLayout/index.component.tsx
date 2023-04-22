import classNames from 'classnames/bind';

import styles from './NotFound.module.scss';

const cx = classNames.bind(styles);

function NotFoundLayout() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('error-content')}>
                <div className={cx('error-thumbnail')}>
                    <img
                        src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
                        alt=""
                        className={cx('error-img')}
                    />
                </div>
                <p className={cx('error-text')}>Trang này không có sẵn. Mong bạn thông cảm.</p>
                <p className={cx('error-text')}>Bạn thử tìm cụm từ khác xem sao nhé.</p>
            </div>
        </div>
    );
}

export default NotFoundLayout;
