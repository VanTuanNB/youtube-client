import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '../Button/index.component';
import styles from './Crossbar.module.scss';

const cx = classNames.bind(styles);

type typeCrossbarList = {
    id: string;
    title: string;
};

function Crossbar() {
    const crossbarList: Array<typeCrossbarList> = [
        { id: 'crossbar1', title: 'Tất cả' },
        { id: 'crossbar2', title: 'Trò chơi' },
        { id: 'crossbar3', title: 'Trực tiếp' },
        { id: 'crossbar4', title: 'Danh sách kếp hợp' },
        { id: 'crossbar5', title: 'Âm nhạc' },
        { id: 'crossbar6', title: 'Tin tức' },
        { id: 'crossbar7', title: 'Hoạt hoạ' },
        { id: 'crossbar8', title: 'Nấu ăn' },
        { id: 'crossbar9', title: 'Bóng đá' },
        { id: 'crossbar10', title: 'Thiên nhiên' },
        { id: 'crossbar11', title: 'Mới tải lên gần đây' },
        { id: 'crossbar12', title: 'Đã xem' },
        { id: 'crossbar13', title: 'Đề xuất mới' },
        { id: 'crossbar14', title: 'Chương trình nấu ăn' },
    ];

    const [active, setActive] = useState<string>('crossbar1');

    return (
        <div className={cx('crossbar')}>
            <ul className={cx('crossbar-list')}>
                {crossbarList.map((crossbar: typeCrossbarList, index: number) => (
                    <li key={index} className="crossbar-item">
                        <Button
                            active={active === crossbar.id}
                            title={crossbar.title}
                            onClick={() => setActive(crossbar.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Crossbar;
