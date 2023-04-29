import { memo, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useSearchParams } from 'react-router-dom';

import styles from './ShortContent.module.scss';
import Button from '@/components/Button/index.component';
import { PauseIcon, PlayIcon, Volume, VolumeMark } from '@/components/Icons/index.component';
import { useElementIntersectionObserver } from '@/hooks/index.hook';
import ShortAction from '../ShortAction/index.component';
import IShort from '@/interfaces/IShorts';

const cx = classNames.bind(styles);

function ShortContent({ data }: { data: IShort }) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const animationPlayRef = useRef<HTMLDivElement | null>(null);
    const animationPauseRef = useRef<HTMLDivElement | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [params, setSearchParams] = useSearchParams();
    const [play, setPlay] = useState<boolean>(false);
    const [volume, setVolume] = useState<boolean>(false);
    const isVisible = useElementIntersectionObserver(
        { root: null, rootMargin: '56px 500px 20px 500px', threshold: 0.25 },
        videoRef,
    );

    useEffect(() => {
        fetch('http://localhost:5000/api/short/stream/' + data._id)
            .then((response) => {
                return response.arrayBuffer();
            })
            .then((arrayBuffer) => {
                const blob = new Blob([arrayBuffer], { type: 'video/mp4' });
                const url = URL.createObjectURL(blob);
                if (!videoRef.current!.src) videoRef.current!.setAttribute('src', url);
            })
            .catch((error) => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (isVisible) {
            setSearchParams((prevPrams: URLSearchParams) => {
                prevPrams.set('id', data._id);
                return prevPrams;
            });
        }
        if (!!videoRef.current!.src) {
            if (isVisible) {
                if (!play) {
                    videoRef.current!.play();
                    setPlay(true);
                }
            } else {
                if (play) {
                    videoRef.current!.pause();
                    setPlay(false);
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible]);

    useEffect(() => {
        volume ? (videoRef.current!.muted = true) : (videoRef.current!.muted = false);
    }, [volume]);

    const handleTogglePlay = () => {
        if (play) {
            videoRef.current!.pause();
            setPlay((preState) => !preState);
        } else {
            videoRef.current!.play();
            setPlay((preState) => !preState);
        }
    };

    const handleVolume = () => {
        setVolume((prevState) => !prevState);
    };

    return (
        <div className={cx('short-container')}>
            <div className={cx('short-content')}>
                <div className={cx('short-flex')}>
                    <div className={cx('box')} onClick={handleTogglePlay}>
                        <div className={cx('wrapper-video')}>
                            <video
                                ref={videoRef}
                                onPlay={() => (animationPlayRef.current!.style.display = 'flex')}
                                onPause={() => (animationPauseRef.current!.style.display = 'flex')}
                                loop
                                muted
                                className={cx('short-video')}
                            >
                                <source type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className={cx('short-control')}>
                        {play ? (
                            <button
                                className={cx('btn-control')}
                                onClick={() => {
                                    videoRef.current!.pause();
                                    setPlay(false);
                                }}
                            >
                                <PauseIcon width="24px" height="24px" />
                            </button>
                        ) : (
                            <button
                                className={cx('btn-control')}
                                onClick={() => {
                                    videoRef.current!.play();
                                    setPlay(true);
                                }}
                            >
                                <PlayIcon width="24px" height="24px" />
                            </button>
                        )}
                        <button className={cx('btn-control')} onClick={handleVolume}>
                            {volume ? <VolumeMark width="24px" height="24px" /> : <Volume width="24px" height="24px" />}
                        </button>
                    </div>
                    <div className={cx('short-info')}>
                        <span className={cx('short-info-title')}>{data.title}</span>
                        <div className={cx('short-info-box')}>
                            <div className={cx('short-info-left')}>
                                <div className={cx('short-avatar')}>
                                    <img src={data.owner.avatarUrl} alt="" className={cx('short-img')} />
                                </div>
                                <Link to={'/@' + data.owner.nickname} className={cx('short-link-channel')}>
                                    {'@' + data.owner.nickname}
                                </Link>
                            </div>
                            <div className={cx('short-info-right')}>
                                <Button active title="Đăng Ký" />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    ref={animationPlayRef}
                    className={cx('play-animation-play')}
                    onAnimationEnd={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                >
                    <PlayIcon width="40px" height="40px" fill="#eee" />
                </div>
                <div
                    ref={animationPauseRef}
                    className={cx('play-animation-pause')}
                    onAnimationEnd={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                >
                    <PauseIcon width="40px" height="40px" fill="#eee" />
                </div>
            </div>
            <ShortAction likeCount={data.likeCount} owner={data.owner} />
        </div>
    );
}

export default memo(ShortContent);
