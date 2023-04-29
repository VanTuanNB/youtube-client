import ProgressBar from '@ramonak/react-progress-bar';
import classNames from 'classnames/bind';
import styles from './ProcessBar.module.scss';
const cx = classNames.bind(styles);

function CustomProcessBar() {
    return (
        <ProgressBar
            className={cx('custom')}
            completed={100}
            height="4px"
            bgColor="#ff0000"
            animateOnRender
            maxCompleted={100}
            customLabel=" "
        />
    );
}

export default CustomProcessBar;
