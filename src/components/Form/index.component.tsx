import classNames from 'classnames/bind';

import styles from './Form.module.scss';
import { memo, useMemo, useState } from 'react';

const cx = classNames.bind(styles);

interface IProps {
    isFormShort?: boolean;
    onSubmit: (data: any) => void;
}

function Form({ isFormShort, onSubmit }: IProps) {
    const [title, setTitle] = useState<string>('');
    const [thumbnail, setThumbnail] = useState<string>('');
    const [videoEmbed, setVideoEmbed] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [shortTitle, setShortTitle] = useState<string>('');
    const [fileShort, setFileShort] = useState<FileList | null>();

    const isSuccess = useMemo(() => {
        if (!title) return false;
        if (!thumbnail) return false;
        if (!videoEmbed) return false;
        if (!category) return false;
        return true;
    }, [category, thumbnail, title, videoEmbed]);

    const isSuccessShort = useMemo(() => {
        if (!shortTitle) return false;
        if (!fileShort) return false;
        return true;
    }, [shortTitle, fileShort]);

    function handleWhenSubmit() {
        setTitle('');
        setThumbnail('');
        setVideoEmbed('');
        setCategory('');
        return {
            isSuccess,
            title,
            thumbnail,
            embed: {
                iframeUrl: videoEmbed,
            },
            category,
        };
    }

    function handleShortSubmit() {
        setShortTitle('');
        setThumbnail('');
        return { isSuccess: isSuccessShort, shortTitle, file: fileShort, thumbnail };
    }

    return (
        <form
            className={cx('form')}
            onSubmit={(e) => {
                e.preventDefault();
                isFormShort ? onSubmit(handleShortSubmit()) : onSubmit(handleWhenSubmit());
            }}
        >
            {isFormShort ? (
                <>
                    <div className={cx('form-group')}>
                        <label htmlFor="title" className={cx('label-control')}>
                            Tiêu đề
                        </label>
                        <div className={cx('wrapper-input')}>
                            <input
                                value={shortTitle}
                                type="text"
                                id="title"
                                className={cx('input-control')}
                                onChange={(e) => setShortTitle(e.target.value)}
                            />
                            {!shortTitle && <span className={cx('error-message')}>Trường này không để trống!</span>}
                        </div>
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="thumbnail" className={cx('label-control')}>
                            Hình ảnh
                        </label>
                        <div className={cx('wrapper-input')}>
                            <input
                                value={thumbnail}
                                type="text"
                                id="thumbnail"
                                className={cx('input-control')}
                                onChange={(e) => setThumbnail(e.target.value)}
                            />
                            {!thumbnail && <span className={cx('error-message')}>Trường này không được để trống!</span>}
                        </div>
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="fileVideo" className={cx('label-control')}>
                            Video file
                        </label>
                        <div className={cx('wrapper-input')}>
                            <input
                                type="file"
                                id="fileVideo"
                                className={cx('input-control')}
                                onChange={(e) => setFileShort(e.target.files)}
                            />
                            {!fileShort && <span className={cx('error-message')}>Trường này không để trống!</span>}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={cx('form-group')}>
                        <label htmlFor="title" className={cx('label-control')}>
                            Tiêu đề
                        </label>
                        <div className={cx('wrapper-input')}>
                            <input
                                value={title}
                                type="text"
                                id="title"
                                className={cx('input-control')}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            {!title && <span className={cx('error-message')}>Trường này không được để trống!</span>}
                        </div>
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="thumbnail" className={cx('label-control')}>
                            Hình ảnh
                        </label>
                        <div className={cx('wrapper-input')}>
                            <input
                                value={thumbnail}
                                type="text"
                                id="thumbnail"
                                className={cx('input-control')}
                                onChange={(e) => setThumbnail(e.target.value)}
                            />
                            {!thumbnail && <span className={cx('error-message')}>Trường này không được để trống!</span>}
                        </div>
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="embed" className={cx('label-control')}>
                            Video embed
                        </label>
                        <div className={cx('wrapper-input')}>
                            <input
                                value={videoEmbed}
                                type="text"
                                id="embed"
                                className={cx('input-control')}
                                onChange={(e) => setVideoEmbed(e.target.value)}
                            />
                            {!videoEmbed && (
                                <span className={cx('error-message')}>Trường này không được để trống!</span>
                            )}
                        </div>
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="category" className={cx('label-control')}>
                            Danh mục
                        </label>
                        <div className={cx('wrapper-input')}>
                            <input
                                value={category}
                                type="text"
                                id="category"
                                className={cx('input-control')}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            {!category && <span className={cx('error-message')}>Trường này không được để trống!</span>}
                        </div>
                    </div>
                </>
            )}
            <div className={cx('form-action')}>
                <button type="submit" className={cx('btn-submit')}>
                    Tạo
                </button>
            </div>
        </form>
    );
}

export default memo(Form);
