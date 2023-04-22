import { ReactElement } from 'react';

import {
    ClockIcon,
    ClockIconActive,
    DiaryIcon,
    DiaryIconActive,
    FeedbackIcon,
    FireIcon,
    FireIconActive,
    GameIcon,
    GameIconActive,
    HomeIcon,
    HomeIconActive,
    LibraryIcon,
    LibraryIconActive,
    LikeIcon,
    LikeIconActive,
    MusicIcon,
    MusicIconActive,
    NewIcon,
    NewIconActive,
    QuestionIcon,
    SettingIcon,
    ShortIcon,
    ShortIconActive,
    SportIcon,
    SportIconActive,
    SubscribeIcon,
    SubscribeIconActive,
    VideoIcon,
    WatchSeeIcon,
    WatchSeeIconActive,
    YouTubeKidsLogo,
    YouTubeStudioLogo,
} from '@/components/Icons/index.component';

export interface ICategory {
    path?: string;
    title: string;
    icon?: ReactElement;
    activeIcon?: ReactElement;
    avatar?: string;
}

export const categories: Array<ICategory> = [
    {
        path: '/',
        title: 'Trang Chủ',
        icon: <HomeIcon width="24px" height="24px" />,
        activeIcon: <HomeIconActive width="24px" height="24px" />,
    },
    {
        path: '/shorts',
        title: 'Shorts',
        icon: <ShortIcon width="24px" height="24px" />,
        activeIcon: <ShortIconActive width="24px" height="24px" />,
    },
    {
        path: '/feed/subscriptions',
        title: 'Kênh đăng ký',
        icon: <SubscribeIcon width="24px" height="24px" />,
        activeIcon: <SubscribeIconActive width="24px" height="24px" />,
    },
    {
        path: '/feed/library',
        title: 'Thư viện',
        icon: <LibraryIcon width="24px" height="24px" />,
        activeIcon: <LibraryIconActive width="24px" height="24px" />,
    },
    {
        path: '/feed/history',
        title: 'Video đã xem',
        icon: <ClockIcon width="24px" height="24px" />,
        activeIcon: <ClockIconActive width="24px" height="24px" />,
    },
    {
        path: '/channel',
        title: 'Video của bạn',
        icon: <VideoIcon width="24px" height="24px" />,
        // activeIcon: <SubscribeIconActive width="24px" height="24px" />,
    },
    {
        path: '/playlist',
        title: 'Xem sau',
        icon: <WatchSeeIcon width="24px" height="24px" />,
        activeIcon: <WatchSeeIconActive width="24px" height="24px" />,
    },
    {
        path: '/playlist',
        title: 'Video đã thích',
        icon: <LikeIcon width="24px" height="24px" />,
        activeIcon: <LikeIconActive width="24px" height="24px" />,
    },
];

export const subscribesUser: Array<ICategory> = [
    {
        path: '/@Levi97',
        title: 'Levi',
        avatar: 'https://yt3.ggpht.com/4ffrJrze6zBmxEfzUhR3TqYXBHWU_O6sii9jILfUdMbd8HhBAtk7CYeBEM-fp_S6RYu81Szsnw=s88-c-k-c0x00ffffff-no-rj',
    },
    {
        path: '/@Levi97',
        title: 'Levi',
        avatar: 'https://yt3.ggpht.com/4ffrJrze6zBmxEfzUhR3TqYXBHWU_O6sii9jILfUdMbd8HhBAtk7CYeBEM-fp_S6RYu81Szsnw=s88-c-k-c0x00ffffff-no-rj',
    },
    {
        path: '/@Levi97',
        title: 'Levi',
        avatar: 'https://yt3.ggpht.com/4ffrJrze6zBmxEfzUhR3TqYXBHWU_O6sii9jILfUdMbd8HhBAtk7CYeBEM-fp_S6RYu81Szsnw=s88-c-k-c0x00ffffff-no-rj',
    },
];

export const discovers: Array<ICategory> = [
    {
        path: '/feed/trending',
        title: 'Thịnh hành',
        icon: <FireIcon width="24px" height="24px" />,
        activeIcon: <FireIconActive width="24px" height="24px" />,
    },
    {
        path: '/music',
        title: 'Âm nhạc',
        icon: <MusicIcon width="24px" height="24px" />,
        activeIcon: <MusicIconActive width="24px" height="24px" />,
    },
    {
        path: '/gaming',
        title: 'Trò chơi',
        icon: <GameIcon width="24px" height="24px" />,
        activeIcon: <GameIconActive width="24px" height="24px" />,
    },
    {
        path: '/news',
        title: 'Tin tức',
        icon: <NewIcon width="24px" height="24px" />,
        activeIcon: <NewIconActive width="24px" height="24px" />,
    },
    {
        path: '/sports',
        title: 'Thể thao',
        icon: <SportIcon width="24px" height="24px" />,
        activeIcon: <SportIconActive width="24px" height="24px" />,
    },
];

export const youtubeServices: Array<ICategory> = [
    {
        path: '/studio',
        title: 'YouTube Studio',
        icon: <YouTubeStudioLogo width="24px" height="24px" />,
    },
    {
        path: '/kids',
        title: 'YouTube Kids',
        icon: <YouTubeKidsLogo width="24px" height="24px" />,
    },
];

export const categoriesAction: Array<ICategory> = [
    {
        path: '/account',
        title: 'Cài đặt',
        icon: <SettingIcon width="24px" height="24px" />,
    },
    {
        path: '/reporthistory',
        title: 'Nhật ký báo cáo',
        icon: <DiaryIcon width="24px" height="24px" />,
        activeIcon: <DiaryIconActive width="24px" height="24px" />,
    },
    {
        title: 'Trợ giúp',
        icon: <QuestionIcon width="24px" height="24px" />,
    },
    {
        title: 'Gửi ý kiến phản hồi',
        icon: <FeedbackIcon width="24px" height="24px" />,
    },
];
