import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('guide-primary')}>
                <Link to="/" className={cx('guide-links')}>
                    Giới thiệu
                </Link>
                <Link to="/" className={cx('guide-links')}>
                    Báo chí
                </Link>
                <Link to="/" className={cx('guide-links')}>
                    Bản quyền
                </Link>
                <Link to="/" className={cx('guide-links')}>
                    Liên hệ với chúng tôi
                </Link>
                <Link to="/" className={cx('guide-links')}>
                    Quảng cáo
                </Link>
                <Link to="/" className={cx('guide-links')}>
                    Nhà phát triển
                </Link>
            </div>
            <div className={cx('guide-secondary')}>
                <Link to="/" className={cx('guide-links')}>
                    Điều khiển
                </Link>
                <Link to="/" className={cx('guide-links')}>
                    Quyền riêng tư
                </Link>
                <Link to="/" className={cx('guide-links')}>
                    Chính sách an toàn
                </Link>
                <Link to="/" className={cx('guide-links')}>
                    Cách YouTube hoạt động
                </Link>
                <Link to="/" className={cx('guide-links')}>
                    Thử các tính năng mới
                </Link>
            </div>
            <div id={cx('copyright')} slot="copyright">
                <div dir="ltr" style={{ display: 'inline' }}>
                    © 2023 Google LLC
                </div>
            </div>
        </footer>
    );
}

export default Footer;
