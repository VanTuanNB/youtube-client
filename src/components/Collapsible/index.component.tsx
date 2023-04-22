import classNames from 'classnames/bind';
import styles from './Collapsible.module.scss';

const cx = classNames.bind(styles);

function Collapsible() {
    return <div className={cx('collapsible')}></div>;
}

export default Collapsible;
