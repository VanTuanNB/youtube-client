import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './PopperSearch.module.scss';
import { ClockIcon, MicroIcon, SearchIcon, XMarkIcon } from '@/components/Icons/index.component';
import { getSuggestSearchVideo } from '@/services/Video.service';
import IResponse from '@/interfaces/IResponse';

const cx = classNames.bind(styles);

interface ISearchResult {
    _id: string;
    keywordSuggest: string;
}

function PopperSearch() {
    const [keyword, setKeyword] = useState<string>('');
    const [searchResult, setSearchResult] = useState<Array<ISearchResult>>([]);
    const [showHeadless, setShowHeadless] = useState<boolean>(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (!keyword.trim()) {
            setSearchResult([]);
            return;
        }
        getSuggestSearchVideo(keyword)
            .then((response: IResponse) => response.data)
            .then((data: Array<ISearchResult>) => setSearchResult(data))
            .catch((err) => console.log(err));
    }, [keyword]);

    return (
        <>
            <div className={cx('header-search')}>
                <div className={cx('header-search-wrap-box')}>
                    <HeadlessTippy
                        interactive
                        visible={showHeadless && searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('popper-search')} tabIndex={-1} {...attrs}>
                                {
                                    <ul className={cx('popper-search-list')}>
                                        {searchResult.map((result: ISearchResult) => (
                                            <li key={result._id} className={cx('popper-search-item')}>
                                                <NavLink
                                                    to={'/results?search_query=' + result.keywordSuggest}
                                                    className={cx('popper-search-content')}
                                                >
                                                    <div className={cx('popper-search-info')}>
                                                        <ClockIcon
                                                            width="20px"
                                                            height="20px"
                                                            fill="#000"
                                                            className={cx('search-clock-icon')}
                                                        />
                                                        <span className={cx('search-info-text')}>
                                                            {result.keywordSuggest}
                                                        </span>
                                                    </div>
                                                    <div className={cx('popper-search-clear')}>
                                                        <button className={cx('popper-search-clear-action')}>
                                                            Xoá
                                                        </button>
                                                    </div>
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </div>
                        )}
                        onClickOutside={() => setShowHeadless(false)}
                    >
                        <div className={cx('container-header')}>
                            <div className={cx('search-icon-wrapper')}>
                                <SearchIcon className={cx('search-icon-style')} />
                            </div>
                            <div className={cx('search-input-wrapper')}>
                                <div className={cx('search-input')}>
                                    <input
                                        className={cx('search-input-tag')}
                                        type="text"
                                        placeholder="Tìm kiếm"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        onFocus={() => setShowHeadless(true)}
                                        onKeyDown={(e) => {
                                            if (e.repeat) return e.preventDefault();
                                            if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                                                if (keyword.trim()) {
                                                    navigate('/results?search_query=' + keyword);
                                                    setShowHeadless(false);
                                                }
                                            }
                                        }}
                                    />
                                </div>
                                <div className={cx('search-keyboard')}>
                                    <img
                                        src="https://www.gstatic.com/inputtools/images/tia.png"
                                        alt=""
                                        className={cx('search-keyboard-icon')}
                                    />
                                </div>
                            </div>
                            <div className={cx('search-clear')} onClick={() => setKeyword('')}>
                                <XMarkIcon width="24px" height="24px" className={cx('search-clear-icon')} />
                            </div>
                        </div>
                    </HeadlessTippy>
                </div>

                <Tippy content="Tìm kiếm" offset={[10, 20]} arrow={false} placement="bottom">
                    <div className={cx('action-search')}>
                        <SearchIcon width="24px" height="24px" className={cx('search-legacy-icon')} />
                    </div>
                </Tippy>
            </div>

            <Tippy content="Tìm kiếm bằng giọng nói" offset={[10, 20]} arrow={false} placement="bottom">
                <div className={cx('header-voice')}>
                    <MicroIcon width="24px" height="24px" className={cx('micro-icon')} />
                </div>
            </Tippy>
        </>
    );
}

export default PopperSearch;
