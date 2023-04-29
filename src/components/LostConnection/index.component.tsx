import classNames from 'classnames/bind';
import styles from './LostConnection.module.scss';
import { LostConnectionSvg } from '../Icons/index.component';

const cx = classNames.bind(styles);

function LostConnectNetWork() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('background')}>
                <LostConnectionSvg />
            </div>
            <span className={cx('title')}>Kết nối internet</span>
            <span className={cx('sub-title')}>Không có kết nối Internet. Vui lòng kiểm tra mạng.</span>
        </div>
    );
}

export default LostConnectNetWork;
