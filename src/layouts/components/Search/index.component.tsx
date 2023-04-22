import { FilterIcon, NoSearchResultSVG } from '@/components/Icons/index.component';
import Suggest from '@/components/Suggest/index.component';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getResearchVideo } from '@/services/Video.service';
import IResponse from '@/interfaces/IResponse';
import IVideo from '@/interfaces/IVideo';
import { URLSearchParams } from 'url';

const cx = classNames.bind(styles);

function Search() {
    const [params, setSearchParams] = useSearchParams();
    const [results, setResults] = useState<Array<IVideo>>([]);
    useEffect(() => {
        if (!params.get('search_query')?.trim()) {
            setResults([]);
            return;
        }
        getResearchVideo(params.get('search_query') ?? '')
            .then((response: IResponse) => {
                if (response.data.length > 0) return Promise.resolve(response.data);
                setSearchParams((prevParams: URLSearchParams) => {
                    prevParams.set('search_query', '');
                    return prevParams;
                });
                return Promise.reject(response);
            })
            .then((data: Array<IVideo>) => setResults(data))
            .catch((error) => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);

    return (
        <div className={cx('wrapper-search')}>
            <div className={cx('contents')}>
                <div className={cx('primary')}>
                    <div className={cx('search-result')}>
                        <header className={cx('header-search-result')}>
                            <button className={cx('btn-search-filter')}>
                                <FilterIcon className={cx('filter-icon')} width="24px" height="24px" />
                                <span className={cx('btn-search-filter-title')}>Bộ lọc</span>
                            </button>
                        </header>
                        {results.length > 0 ? (
                            <div className={cx('content-search-result')}>
                                {results.map((result) => (
                                    <Suggest key={result._id} video={result} large />
                                ))}
                            </div>
                        ) : (
                            <div className={cx('no-result')}>
                                <div className={cx('no-result-thumbnail')}>
                                    <NoSearchResultSVG height="auto" width="424px" fill="transparent" />
                                </div>
                                <div className={cx('no-result-text')}>
                                    <div className={cx('no-result-title')}>Không tìm thấy kết quả</div>
                                    <div className={cx('no-result-sub')}>
                                        Hãy thử các từ khóa khác nhau hoặc xóa bộ lọc tìm kiếm
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
