import classNames from 'classnames/bind';
import { MouseEvent, ReactElement } from 'react';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

interface IButtonProps {
    title: string;
    icon?: ReactElement;
    active?: boolean;
    href?: string;
    to?: string;
    onClick?: (event?: MouseEvent) => void;
}

function Button({ title, icon, active, to, href, onClick }: IButtonProps) {
    let Component: any = 'button';
    if (!!href) {
        Component = 'a';
    }
    if (!!to) {
        Component = Link;
    }

    if (!!href && !!to) throw new Error('Prop: href and to cant not use together');

    return (
        <Component
            to={to}
            href={href}
            onClick={onClick}
            className={cx(icon ? 'wrapper' : 'only-title', active && 'active')}
        >
            {icon && <div className={cx('box-icon')}>{icon}</div>}
            <span className={cx('title')}>{title}</span>
        </Component>
    );
}

export default Button;
