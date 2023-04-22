import { forwardRef } from 'react';

interface IIconPropsComponent {
    width?: string;
    height?: string;
    className?: string;
    fill?: string;
}

export const LogoApp = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 90 20"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet" className="style-scope yt-icon">
            <g className="style-scope yt-icon">
                <path
                    d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                    fill="#FF0000"
                    className="style-scope yt-icon"
                ></path>
                <path
                    d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
                    fill="white"
                    className="style-scope yt-icon"
                ></path>
            </g>
            <g className="style-scope yt-icon">
                <g id="youtube-paths" className="style-scope yt-icon">
                    <path
                        d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"
                        className="style-scope yt-icon"
                    ></path>
                    <path
                        d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"
                        className="style-scope yt-icon"
                    ></path>
                    <path
                        d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"
                        className="style-scope yt-icon"
                    ></path>
                    <path
                        d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"
                        className="style-scope yt-icon"
                    ></path>
                    <path
                        d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"
                        className="style-scope yt-icon"
                    ></path>
                    <path
                        d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"
                        className="style-scope yt-icon"
                    ></path>
                    <path
                        d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"
                        className="style-scope yt-icon"
                    ></path>
                </g>
            </g>
        </g>
    </svg>
);

export const SearchIcon = forwardRef(
    ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent, ref) => (
        <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className={className}
            style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
        >
            <g className="style-scope yt-icon">
                <path
                    d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                    className="style-scope yt-icon"
                ></path>
            </g>
        </svg>
    ),
);

export const XMarkIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M12.7,12l6.6,6.6l-0.7,0.7L12,12.7l-6.6,6.6l-0.7-0.7l6.6-6.6L4.6,5.4l0.7-0.7l6.6,6.6l6.6-6.6l0.7,0.7L12.7,12z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const MicroIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const CameraIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const BellIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const UserIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,3c4.96,0,9,4.04,9,9 c0,1.42-0.34,2.76-0.93,3.96c-1.53-1.72-3.98-2.89-7.38-3.03C14.57,12.6,16,10.97,16,9c0-2.21-1.79-4-4-4C9.79,5,8,6.79,8,9 c0,1.97,1.43,3.6,3.31,3.93c-3.4,0.14-5.85,1.31-7.38,3.03C3.34,14.76,3,13.42,3,12C3,7.04,7.04,3,12,3z M9,9c0-1.65,1.35-3,3-3 s3,1.35,3,3c0,1.65-1.35,3-3,3S9,10.65,9,9z M12,21c-3.16,0-5.94-1.64-7.55-4.12C6.01,14.93,8.61,13.9,12,13.9 c3.39,0,5.99,1.03,7.55,2.98C17.94,19.36,15.16,21,12,21z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const HomeIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const HomeIconActive = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path d="M4,10V21h6V15h4v6h6V10L12,3Z" className="style-scope yt-icon"></path>
        </g>
    </svg>
);

export const ShortIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g height="24" viewBox="0 0 24 24" width="24" className="style-scope yt-icon">
            <path
                d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const ShortIconActive = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g height="24" viewBox="0 0 24 24" width="24" className="style-scope yt-icon">
            <path
                d="M17.77 10.32c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const SubscribeIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const SubscribeIconActive = ({
    width = '100%',
    height = '100%',
    className,
    fill = '#fff',
}: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M20,7H4V6h16V7z M22,9v12H2V9H22z M15,15l-5-3v6L15,15z M17,3H7v1h10V3z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const LibraryIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const LibraryIconActive = ({
    width = '100%',
    height = '100%',
    className,
    fill = '#fff',
}: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M4,20h14v1H3V6h1V20z M21,3v15H6V3H21z M17,10.5L11,7v7L17,10.5z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const ClockIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const ClockIconActive = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,2C8.73,2,5.8,3.44,4,5.83V3.02H2V9h6V7H5.62 C7.08,5.09,9.36,4,12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8H2c0,5.51,4.49,10,10,10s10-4.49,10-10S17.51,2,12,2z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const VideoIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z" className="style-scope yt-icon"></path>
        </g>
    </svg>
);

export const MenuIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" className="style-scope yt-icon"></path>
        </g>
    </svg>
);

export const OptionIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        enableBackground="new 0 0 24 24"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
    </svg>
);

export const WatchSeeIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const WatchSeeIconActive = ({
    width = '100%',
    height = '100%',
    className,
    fill = '#fff',
}: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M14.97,16.95L10,13.87V7h2v5.76 l4.03,2.49L14.97,16.95z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const LikeIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const LikeIconActive = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const DownArrowIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path d="M12,15.7L5.6,9.4l0.7-0.7l5.6,5.6l5.6-5.6l0.7,0.7L12,15.7z" className="style-scope yt-icon"></path>
        </g>
    </svg>
);

export const FireIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M14.72,17.84c-0.32,0.27-0.83,0.53-1.23,0.66c-1.34,0.33-2.41-0.34-2.62-0.46c-0.21-0.11-0.78-0.38-0.78-0.38 s0.35-0.11,0.41-0.13c1.34-0.54,1.89-1.24,2.09-2.11c0.2-0.84-0.16-1.56-0.31-2.39c-0.12-0.69-0.11-1.28,0.12-1.9 c0.02-0.05,0.12-0.43,0.12-0.43s0.11,0.35,0.13,0.41c0.71,1.51,2.72,2.18,3.07,3.84c0.03,0.15,0.05,0.3,0.05,0.46 C15.8,16.3,15.4,17.26,14.72,17.84z M12.4,4.34c-0.12,0.08-0.22,0.15-0.31,0.22c-2.99,2.31-2.91,5.93-2.31,8.55l0.01,0.03l0.01,0.03 c0.06,0.35-0.05,0.7-0.28,0.96c-0.24,0.26-0.58,0.41-0.95,0.41c-0.44,0-0.85-0.2-1.22-0.6c-0.67-0.73-1.17-1.57-1.5-2.46 c-0.36,0.77-0.75,1.98-0.67,3.19c0.04,0.51,0.12,1,0.25,1.43c0.18,0.6,0.43,1.16,0.75,1.65c1.05,1.66,2.88,2.82,4.78,3.05 c0.42,0.05,0.85,0.08,1.26,0.08c1.34,0,3.25-0.27,4.74-1.57c1.77-1.56,2.35-3.99,1.44-6.06c-0.04-0.1-0.06-0.14-0.09-0.19 l-0.04-0.08c-0.21-0.42-0.47-0.81-0.75-1.14c-0.24-0.3-0.48-0.56-0.79-0.83c-0.3-0.27-0.64-0.51-1-0.77 c-0.46-0.33-0.93-0.67-1.38-1.09C12.98,7.83,12.3,6.11,12.4,4.34 M14.41,2c0,0-0.2,0.2-0.56,0.99c-0.66,1.92-0.15,3.95,1.34,5.39 c0.73,0.69,1.61,1.17,2.36,1.84c0.32,0.29,0.62,0.59,0.89,0.93c0.36,0.42,0.66,0.89,0.91,1.38c0.05,0.1,0.1,0.2,0.14,0.3 c1.12,2.55,0.36,5.47-1.73,7.31C16.23,21.47,14.22,22,12.22,22c-0.47,0-0.95-0.03-1.41-0.09c-2.29-0.28-4.42-1.66-5.63-3.57 c-0.39-0.6-0.68-1.26-0.88-1.93c-0.16-0.54-0.25-1.1-0.29-1.67c-0.12-1.88,0.67-3.63,1.08-4.31c0.41-0.69,1.55-2.18,1.55-2.18 s0,0.03-0.01,0.09C6.41,10.11,7,11.88,8.22,13.22c0.15,0.17,0.27,0.22,0.34,0.22c0.06,0,0.09-0.04,0.08-0.09 C7.79,9.59,8.37,6,11.35,3.7c0.59-0.46,1.51-0.94,1.98-1.18C13.8,2.28,14.41,2,14.41,2L14.41,2z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const FireIconActive = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M19.48,12.83c-0.04-0.1-0.09-0.2-0.14-0.3c-0.25-0.49-0.55-0.96-0.91-1.38c-0.27-0.34-0.57-0.65-0.89-0.93 c-0.75-0.67-1.63-1.14-2.36-1.84c-1.49-1.44-2-3.46-1.34-5.39C14.2,2.2,14.41,2,14.41,2s-0.6,0.28-1.07,0.52 c-0.47,0.24-1.39,0.72-1.98,1.18C8.37,6,7.79,9.59,8.64,13.35c0.01,0.05-0.02,0.09-0.08,0.09c-0.07,0-0.18-0.06-0.34-0.22 C7,11.88,6.41,10.11,6.64,8.35c0.01-0.06,0.01-0.09,0.01-0.09S5.51,9.74,5.1,10.43c-0.41,0.69-1.2,2.43-1.08,4.31 c0.04,0.56,0.13,1.12,0.29,1.67c0.2,0.68,0.49,1.33,0.88,1.93c1.21,1.91,3.34,3.29,5.63,3.57c0.47,0.06,0.94,0.09,1.41,0.09 c2,0,4.01-0.53,5.53-1.87C19.84,18.3,20.6,15.38,19.48,12.83z M14.72,17.84c-0.32,0.27-0.83,0.53-1.23,0.66 c-1.34,0.33-2.41-0.34-2.62-0.46c-0.21-0.11-0.78-0.38-0.78-0.38s0.35-0.11,0.41-0.13c1.34-0.54,1.89-1.24,2.09-2.11 c0.2-0.84-0.16-1.56-0.31-2.39c-0.12-0.69-0.11-1.28,0.12-1.9c0.02-0.05,0.12-0.43,0.12-0.43s0.11,0.35,0.13,0.41 c0.71,1.51,2.72,2.18,3.07,3.84c0.03,0.15,0.05,0.3,0.05,0.46C15.8,16.3,15.4,17.26,14.72,17.84z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const MusicIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M12,4v9.38C11.27,12.54,10.2,12,9,12c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4V8h6V4H12z M9,19c-1.66,0-3-1.34-3-3 s1.34-3,3-3s3,1.34,3,3S10.66,19,9,19z M18,7h-5V5h5V7z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const MusicIconActive = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M12,4v9.38C11.27,12.54,10.2,12,9,12c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4V8h6V4H12z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const GameIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M10,12H8v2H6v-2H4v-2h2V8h2v2h2V12z M17,12.5c0-0.83-0.67-1.5-1.5-1.5S14,11.67,14,12.5c0,0.83,0.67,1.5,1.5,1.5 S17,13.33,17,12.5z M20,9.5C20,8.67,19.33,8,18.5,8S17,8.67,17,9.5c0,0.83,0.67,1.5,1.5,1.5S20,10.33,20,9.5z M16.97,5.15l-4.5,2.53 l-0.49,0.27l-0.49-0.27l-4.5-2.53L3,7.39v6.43l8.98,5.04l8.98-5.04V7.39L16.97,5.15 M16.97,4l4.99,2.8v7.6L11.98,20L2,14.4V6.8 L6.99,4l4.99,2.8L16.97,4L16.97,4z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const GameIconActive = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M16.97,4l-4.99,2.8L6.99,4L2,6.8v7.6l9.98,5.6l9.98-5.6V6.8L16.97,4z M10,12H8v2H6v-2H4v-2h2V8h2v2h2V12z M15.5,14 c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5c0.83,0,1.5,0.67,1.5,1.5C17,13.33,16.33,14,15.5,14z M18.5,11 c-0.83,0-1.5-0.67-1.5-1.5C17,8.67,17.67,8,18.5,8C19.33,8,20,8.67,20,9.5C20,10.33,19.33,11,18.5,11z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const NewIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M11,11v6H7v-6H11 M12,10H6v8h6V10L12,10z M3,3.03V21h14l4-4V3.03 M20,4v11.99L19.99,16H16v3.99L15.99,20H4V4H20z M18,8H6V6 h12V8z M18,15h-5v-2h5V15z M18,12h-5v-2h5V12z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const NewIconActive = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M3,3.03V21h14l4-4V3.03H3z M6,6h12v2H6V6z M13,15v-2h5v2H13z M13,12v-2h5v2H13z M12,18H6v-8h6V18z M16,16h3.99L16,19.99V16z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const SportIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M17 3V5V6V10V10.51L16.99 10.97C16.94 13.1 15.66 14.94 13.74 15.67H13.72L13.66 15.69L13 15.95V16.65V19V20H14V21H15H10V20H11V19V16.65V15.95L10.34 15.71L10.26 15.68H10.25C8.33 14.95 7.05 13.11 7 10.98V10.51V10V6V5V3H17ZM18 2H6V5H4V6V10V11H6.01C6.07 13.53 7.63 15.78 9.97 16.64C9.98 16.64 9.99 16.64 10 16.65V19H9V20H8V22H16V20H15V19H14V16.65C14.01 16.65 14.02 16.65 14.03 16.64C16.36 15.78 17.93 13.54 17.99 11H20V10V6V5H18V2ZM18 10V6H19V10H18ZM5 10V6H6V10H5Z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const SportIconActive = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M18 5V2H6V5H4V6V10V11H6.01C6.07 13.53 7.63 15.78 9.97 16.64C9.98 16.64 9.99 16.64 10 16.65V19H9V20H8V22H16V20H15V19H14V16.65C14.01 16.65 14.02 16.65 14.03 16.64C16.36 15.78 17.93 13.54 17.99 11H20V10V6V5H18ZM6 10H5V6H6V10ZM19 10H18V6H19V10Z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const YouTubeStudioLogo = ({
    width = '100%',
    height = '100%',
    className,
    fill = '#fff',
}: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                fill="red"
                d="M11.13 1.21c.48-.28 1.26-.28 1.74 0l8.01 4.64c.48.28.87.97.87 1.53v9.24c0 .56-.39 1.25-.87 1.53l-8.01 4.64c-.48.28-1.26.28-1.74 0l-8.01-4.64c-.48-.28-.87-.97-.87-1.53V7.38c0-.56.39-1.25.87-1.53l8.01-4.64z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#fff"
                d="m12.71 18.98 4.9-2.83c.41-.24.64-.77.64-1.24V9.24c0-.47-.23-1-.64-1.24l-4.9-2.82c-.41-.23-1.02-.23-1.42 0L6.39 8c-.4.23-.64.77-.64 1.24v5.67c0 .47.24 1 .64 1.24l4.9 2.83c.2.12.46.18.71.18.26-.01.51-.07.71-.18z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="red"
                d="m12.32 5.73 4.89 2.83c.16.09.41.31.41.67v5.67c0 .37-.25.54-.41.64l-4.89 2.83c-.16.09-.48.09-.64 0l-4.89-2.83c-.16-.09-.41-.34-.41-.64V9.24c.02-.37.25-.58.41-.68l4.89-2.83c.08-.05.2-.07.32-.07s.24.02.32.07z"
                className="style-scope yt-icon"
            ></path>
            <path fill="#fff" d="M9.88 15.25 15.5 12 9.88 8.75z" className="style-scope yt-icon"></path>
        </g>
    </svg>
);

export const YouTubeKidsLogo = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                fill="#FF0000"
                d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#000"
                d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#000"
                d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#FFF"
                d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const SettingIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const DiaryIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M13.18,4l0.24,1.2L13.58,6h0.82H19v7h-5.18l-0.24-1.2L13.42,11H12.6H6V4H13.18 M14,3H5v18h1v-9h6.6l0.4,2h7V5h-5.6L14,3 L14,3z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const DiaryIconActive = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path d="M14,3H5v18h1v-9h6.6l0.4,2h7V5h-5.6L14,3L14,3z" className="style-scope yt-icon"></path>
        </g>
    </svg>
);

export const QuestionIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const FeedbackIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const CheckIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{
            pointerEvents: 'none',
            display: 'block',
            width,
            height,
            fill,
        }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const DislikeIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{
            pointerEvents: 'none',
            display: 'block',
            width,
            height,
            fill,
        }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const DislikeIconActive = ({
    width = '100%',
    height = '100%',
    className,
    fill = '#fff',
}: IIconPropsComponent) => (
    <svg
        viewBox="0 0 32 32"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{
            pointerEvents: 'none',
            display: 'block',
            width,
            height,
            fill,
        }}
    >
        <g className="style-scope yt-icon">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.15895 20.0023C5.32221 20.0023 4.54031 19.586 4.07317 18.8918C3.30492 17.7502 3.31241 16.255 4.09205 15.1211L4.82045 14.0617L4.14538 12.4963C3.74297 11.5632 3.84031 10.4898 4.40399 9.64424L5.50013 8.00004L5.50013 6.00231C5.50013 4.89774 6.39557 4.00231 7.50014 4.00232L20.0001 4.00239C21.1047 4.0024 22.0001 4.89783 22.0001 6.0024L22.0001 19.1736C22.0001 20.0073 21.7396 20.8201 21.2551 21.4985L16.1368 28.6641C15.9224 28.9643 15.5279 29.0747 15.1888 28.9294C13.4238 28.1729 12.4653 26.2504 12.9234 24.3856L14.0001 20.0024L6.15895 20.0023ZM27 18.5001C28.1046 18.5001 29 17.6046 29 16.5001L29 6.00006C29 4.89549 28.1046 4.00006 27 4.00006L24 4.00006L24 18.5001L27 18.5001Z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const ShareIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{
            pointerEvents: 'none',
            display: 'block',
            width,
            height,
            fill,
        }}
    >
        <g mirror-in-rtl="" className="style-scope yt-icon">
            <path
                d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const DownloadIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{
            pointerEvents: 'none',
            display: 'block',
            width,
            height,
            fill,
        }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M17 18V19H6V18H17ZM16.5 11.4L15.8 10.7L12 14.4V4H11V14.4L7.2 10.6L6.5 11.3L11.5 16.3L16.5 11.4Z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const ThreeDotIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{
            pointerEvents: 'none',
            display: 'block',
            width,
            height,
            fill,
        }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M7.5,12c0,0.83-0.67,1.5-1.5,1.5S4.5,12.83,4.5,12s0.67-1.5,1.5-1.5S7.5,11.17,7.5,12z M12,10.5c-0.83,0-1.5,0.67-1.5,1.5 s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S12.83,10.5,12,10.5z M18,10.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 S18.83,10.5,18,10.5z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const FilterIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M15,17h6v1h-6V17z M11,17H3v1h8v2h1v-2v-1v-2h-1V17z M14,8h1V6V5V3h-1v2H3v1h11V8z M18,5v1h3V5H18z M6,14h1v-2v-1V9H6v2H3v1 h3V14z M10,12h11v-1H10V12z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const PlayIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path d="M8 5v14l11-7z" className="style-scope yt-icon"></path>
        </g>
    </svg>
);

export const PauseIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" className="style-scope yt-icon"></path>
        </g>
    </svg>
);

export const Volume = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const VolumeMark = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const CommentIconActive = ({
    width = '100%',
    height = '100%',
    className,
    fill = '#fff',
}: IIconPropsComponent) => (
    <svg
        viewBox="0 0 32 32"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.5 3C4.11929 3 3 4.11929 3 5.5V21.5C3 22.8807 4.11929 24 5.5 24H22.5L26.7474 28.5741C27.5513 29.4399 29 28.871 29 27.6895V24V5.5C29 4.11929 27.8807 3 26.5 3H5.5ZM8 10.5C8 9.67157 8.67157 9 9.5 9H22.5C23.3284 9 24 9.67157 24 10.5C24 11.3284 23.3284 12 22.5 12H9.5C8.67157 12 8 11.3284 8 10.5ZM8 16.5C8 15.6716 8.67157 15 9.5 15H18.5C19.3284 15 20 15.6716 20 16.5C20 17.3284 19.3284 18 18.5 18H9.5C8.67157 18 8 17.3284 8 16.5Z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const ShareIconActive = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 32 32"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.7375 5.26556L28.6745 15.2624C29.1083 15.6589 29.1083 16.3422 28.6745 16.7387L17.7375 26.7356C17.0958 27.3222 16.0628 26.8669 16.0628 25.9975V21.6217C16.0628 21.6217 16.0627 21.6217 16.0626 21.6217C9.92564 21.6217 6.69114 23.9378 5.1615 25.5968C4.80726 25.981 3.97329 25.7343 4.00015 25.2125C4.22558 20.8321 5.86088 10.8892 16.0626 10.8892C16.0627 10.8892 16.0628 10.8892 16.0628 10.8892V6.00368C16.0628 5.13426 17.0958 4.67898 17.7375 5.26556Z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const SpinnerIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className} style={{ width, height, fill }}>
        <path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
    </svg>
);

export const NoSearchResultSVG = ({
    width = '100%',
    height = '100%',
    className,
    fill = '#fff',
}: IIconPropsComponent) => (
    <svg
        viewBox="0 0 230 130"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className="style-scope yt-icon"
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g viewBox="0 0 230 130" className="style-scope yt-icon">
            <defs className="style-scope yt-icon"></defs>
            <path
                fill="#ffc100"
                d="M3.43 126.34H227a29.17 29.17 0 0 0-5.06-24c-4.42-6.11-10-12.51-9.71-28.73s-.4-59.23-20.9-67.3c-28.87-11.37-53.18 18.05-71.57 19s-32.31-9.34-45.87-4.5-11.63 16.68-18.17 19.83-20.58.73-25.18 13.8S34.06 77.8 25 83.73c-8.82 5.75-27.62 9.32-21.57 42.61z"
                className="style-scope yt-icon"
            ></path>
            <g clipPath="url(#empty_search__clip-path)" className="style-scope yt-icon">
                <path
                    fill="#ffd61d"
                    d="M103 87a6 6 0 0 1 6-5.78 5.79 5.79 0 1 1 0 11.57 6 6 0 0 1-6-5.79zm-92.16 31.41a6 6 0 0 1 6-5.78 5.79 5.79 0 0 1 0 11.57 6 6 0 0 1-6-5.79zm14.3-41.94c0-5 4.34-8.8 9.31-9s9 4.33 9 9a9 9 0 0 1-9 9 9.32 9.32 0 0 1-9.31-9zm129.13-12.59H166v11.53h-11.73c-.69 0-1.25-.69-1.25-1.81v-8.26a1.43 1.43 0 0 1 1.25-1.46zM103 111.22c0-4.73 4.12-8.37 8.85-8.55s8.56 4.11 8.56 8.56a8.56 8.56 0 0 1-8.56 8.56 8.86 8.86 0 0 1-8.85-8.57z"
                    className="style-scope yt-icon"
                ></path>
                <path
                    fill="#ffc100"
                    d="M111.73 113.07a1.9 1.9 0 0 1-1.82-1.88 1.82 1.82 0 1 1 3.64 0 1.88 1.88 0 0 1-1.82 1.88z"
                    className="style-scope yt-icon"
                ></path>
                <path
                    fill="#ffd61d"
                    d="M176.68 27.32c0-4.26 3.72-7.54 8-7.71s7.71 3.71 7.71 7.71a7.71 7.71 0 0 1-7.74 7.68 8 8 0 0 1-7.97-7.68z"
                    className="style-scope yt-icon"
                ></path>
                <path
                    fill="#ffc100"
                    d="M184.52 31.19a4 4 0 0 1-3.81-3.94 3.81 3.81 0 1 1 7.62 0 3.94 3.94 0 0 1-3.81 3.94z"
                    className="style-scope yt-icon"
                ></path>
                <path
                    fill="#ffd61d"
                    d="M24.59 56.92A5.47 5.47 0 0 1 30 51.68a5.24 5.24 0 0 1 0 10.48 5.43 5.43 0 0 1-5.41-5.24z"
                    className="style-scope yt-icon"
                ></path>
                <path
                    fill="#ffc100"
                    d="M29.92 59.55a2.7 2.7 0 0 1-2.59-2.68 2.59 2.59 0 1 1 5.18 0 2.68 2.68 0 0 1-2.59 2.68z"
                    className="style-scope yt-icon"
                ></path>
                <path
                    fill="#ffd61d"
                    d="M40 53.15a5.47 5.47 0 0 1 7.53.13 5.24 5.24 0 0 1-7.41 7.41 5.43 5.43 0 0 1-.12-7.54z"
                    className="style-scope yt-icon"
                ></path>
                <path
                    fill="#ffc100"
                    d="M41.87 58.78a2.7 2.7 0 0 1 .06-3.72 2.59 2.59 0 0 1 3.66 3.66 2.68 2.68 0 0 1-3.72.06z"
                    className="style-scope yt-icon"
                ></path>
                <path
                    fill="#ffd61d"
                    d="M52.78 56.92a5.47 5.47 0 0 1 5.42-5.24 5.24 5.24 0 0 1 0 10.48 5.43 5.43 0 0 1-5.42-5.24z"
                    className="style-scope yt-icon"
                ></path>
                <path
                    fill="#ffc100"
                    d="M58.11 59.55a2.7 2.7 0 0 1-2.59-2.68 2.59 2.59 0 1 1 5.18 0 2.68 2.68 0 0 1-2.59 2.68z"
                    className="style-scope yt-icon"
                ></path>
                <path
                    fill="#ffd61d"
                    d="M211 110.72c0-5.23 4.57-9.27 9.8-9.47s9.48 4.56 9.48 9.48a9.48 9.48 0 0 1-9.48 9.48 9.82 9.82 0 0 1-9.8-9.49z"
                    className="style-scope yt-icon"
                ></path>
                <path
                    fill="#ffc100"
                    d="M220.66 113.7a3.06 3.06 0 0 1-2.93-3 2.93 2.93 0 1 1 5.86 0 3 3 0 0 1-2.93 3z"
                    className="style-scope yt-icon"
                ></path>
                <path
                    fill="#ffd61d"
                    d="M104.28 108.46a.5.5 0 0 1-.45-.73l9.57-18.93a.5.5 0 1 1 .89.45l-9.57 18.94a.5.5 0 0 1-.44.27zm96.37 12.97l-3.35-5.08a1.75 1.75 0 0 1-.1-1.75l3.45-6.84-3.45-6a1.75 1.75 0 0 1 0-1.64l3.5-7-3.38-5.57a1.75 1.75 0 0 1 0-1.76l3.42-6.13h5l-3.91 7 3.41 5.61a1.75 1.75 0 0 1 .07 1.68l-3.48 7 3.44 6a1.75 1.75 0 0 1 0 1.65l-3.49 6.91 3.91 5.93zM53 32.24l5.08-3.35a1.75 1.75 0 0 1 1.75-.1l6.84 3.45 6-3.45a1.75 1.75 0 0 1 1.64 0l7 3.5 5.57-3.38a1.75 1.75 0 0 1 1.76 0l6.13 3.42v5l-7-3.91-5.61 3.41a1.75 1.75 0 0 1-1.68.07l-7-3.48-6 3.44a1.75 1.75 0 0 1-1.65 0l-6.91-3.49L53 37.23z"
                    className="style-scope yt-icon"
                ></path>
                <rect
                    fill="#ffd61d"
                    x="153.02"
                    y="54.34"
                    width="5.88"
                    height="5.88"
                    rx="1.4"
                    ry="1.4"
                    className="style-scope yt-icon"
                ></rect>
                <rect
                    fill="#ffd61d"
                    x="153.02"
                    y="44.21"
                    width="5.88"
                    height="5.88"
                    rx="1.4"
                    ry="1.4"
                    transform="rotate(-90 155.965 47.145)"
                    className="style-scope yt-icon"
                ></rect>
                <rect
                    fill="#ffd61d"
                    x="95.08"
                    y="47.15"
                    width="11.9"
                    height="11.9"
                    rx="2.82"
                    ry="2.82"
                    transform="rotate(-90 101.03 53.1)"
                    className="style-scope yt-icon"
                ></rect>
                <rect
                    fill="#ffd61d"
                    x="178.75"
                    y="78.83"
                    width="8.54"
                    height="16.87"
                    rx="2.85"
                    ry="2.85"
                    className="style-scope yt-icon"
                ></rect>
                <rect
                    fill="#ffd61d"
                    x="138.51"
                    y="6.23"
                    width="32.52"
                    height="29.92"
                    rx="2.39"
                    ry="2.39"
                    className="style-scope yt-icon"
                ></rect>
                <rect
                    fill="#ffd61d"
                    x="49.06"
                    y="69.72"
                    width="17.55"
                    height="13.74"
                    rx="1.22"
                    ry="1.22"
                    className="style-scope yt-icon"
                ></rect>
                <rect
                    fill="#ffd61d"
                    x="154.77"
                    y="107.68"
                    width="32.52"
                    height="13.74"
                    rx="1.62"
                    ry="1.62"
                    className="style-scope yt-icon"
                ></rect>
                <path fill="#ffc100" d="M157.43 110.27h27.2v8.57h-27.2z" className="style-scope yt-icon"></path>
                <path
                    fill="#ffd61d"
                    d="M157.43 118.84l7.05-4.78 2.87 2.47 8.08-4.39 1.98 2.42 7.22-4.29.96 9.47-28.16-.9z"
                    className="style-scope yt-icon"
                ></path>
                <path fill="#ffc100" d="M144.34 12.19h20.87v17.99h-20.87z" className="style-scope yt-icon"></path>
                <path
                    fill="#ffd61d"
                    d="M183-.79s-4.66 5.26-2 10.91c2.45 5.21 10.84 2.5 13.62 6.25s1.56 7.23 5.6 8.44c6.75 2 13.46-3.5 13.46-3.5zM60.93 126.34s3.33-20.47 14.31-20.12 9 14 12.92 15.21 4.88-3.1 9.4-.75c2.61 1.35 3.43 5.66 3.43 5.66z"
                    className="style-scope yt-icon"
                ></path>
                <path
                    fill="#ffc100"
                    d="M65.82 126.34s1-5.89 5.46-5.89c3.42 0 6 5.89 6 5.89z"
                    className="style-scope yt-icon"
                ></path>
                <rect
                    fill="#ffd61d"
                    x="-7.73"
                    y="82.16"
                    width="32.52"
                    height="18.05"
                    rx="1.86"
                    ry="1.86"
                    transform="rotate(90 8.53 91.18)"
                    className="style-scope yt-icon"
                ></rect>
                <rect
                    fill="#ffc100"
                    x="7.73"
                    y="98.12"
                    width="5.88"
                    height="5.88"
                    rx="1.4"
                    ry="1.4"
                    transform="rotate(-90 10.67 101.06)"
                    className="style-scope yt-icon"
                ></rect>
                <rect
                    fill="#ffc100"
                    x="7.73"
                    y="89.74"
                    width="5.88"
                    height="5.88"
                    rx="1.4"
                    ry="1.4"
                    transform="rotate(-90 10.675 92.675)"
                    className="style-scope yt-icon"
                ></rect>
            </g>
            <path
                fill="#4620ae"
                d="M59.72 102h17.55V47.78H85c1.45 0 2.42 1.33 2.3 3.87s3.64 54 3.4 55.56-1.94 1.57-3.39 1.57H59.72z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#6f38d4"
                d="M77.27 47.78H62c-1.09 0-2.3.61-2.3 1.69v24.26a2.64 2.64 0 0 0 2.91 2.74h14.66V65.94h-6.65c-.85 0-1.34-.44-1.34-1.21V58.4c0-.48 0-1 .77-1h7.22z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#4620ae"
                d="M123.19 40.8h20.21c2.26 0 3.51 1.45 3.51 4.44v57.05h-18.53c-2.68 0-5.19-2-5.19-6.38z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#6f38d4"
                d="M88.15 65.9H113a2 2 0 0 0 2.12-2.11V13.1h17.61a2.69 2.69 0 0 1 2.6 2.72c0 1.39-2 56-2.08 57.25 0 1.62-.93 3.39-3.83 3.39H88.84z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#4620ae"
                d="M115.1 13.1h-13.18c-1.45 0-2.5.91-2.5 3.41s1.25 30.5 1.25 32 .4 2.66 2 2.66h12.43v-9.32H109v-15h6.11z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#6f38d4"
                d="M146.91 83.49h13.27c1.82 0 2.78-1.57 2.91-3.51s0-40.43 0-42.73 1.45-4.36 4.84-4.36h17.19s-4.86 59-5 61.16c-.33 4.57-2.62 8.24-9.49 8.24h-23.7z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#4620ae"
                d="M182.39 66.06h17.86V32.9h-15.13l-2.73 33.16z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#6f38d4"
                d="M193.6 50.16c.54-12.43 7.38-21 15.22-21.22l3.65-.09c-.55 8.68 4.79 33.22-3.23 42.61 0 0-.82 0-3.38-.09-7.52-.24-12.77-9.45-12.26-21.21z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#4620ae"
                d="M125.82 126.34h-1.12l11.11-19.62.84.48-10.83 19.14zm10.93-18.9h.97v18.91h-.97zm12.93 18.9l-11.4-18.65.83-.51 11.71 19.16h-1.14zM197 50.16c.54-12.43 7.51-21.3 15.47-21.3s14.12 9.52 13.37 21.3-7.08 21.3-16.6 21.3c-7.24.01-12.75-9.54-12.24-21.3z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#282828"
                d="M210.63 66.68a7.62 7.62 0 0 1-5.56-2.68c-2.91-3.09-4.44-8.27-4.1-13.84.6-9.75 5.6-16.56 12.17-16.56a6.36 6.36 0 0 1 4.57 2.17c2.84 3 4.45 8.45 4.21 14.31-.38 9.33-5.34 16.6-11.29 16.6z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#6f38d4"
                d="M213.15 34.39a5.56 5.56 0 0 1 4 1.94c2.7 2.82 4.24 8.09 4 13.76-.37 8.88-5 15.83-10.54 15.83a6.89 6.89 0 0 1-5-2.4c-2.77-2.95-4.23-7.91-3.9-13.28.57-9.34 5.27-15.86 11.43-15.86m0-1.5c-7.41 0-12.34 7.75-12.92 17.27s4.21 17.27 10.41 17.27 11.62-7.2 12-17.27c.4-9.53-3.88-17.27-9.53-17.27z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#f86500"
                d="M209 50.16c.13-2.89 1.75-5 3.6-5s3.29 2.22 3.11 5-1.65 5-3.87 5c-1.67-.03-2.95-2.26-2.84-5z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#6f38d4"
                d="M133.23 107.65a4.82 4.82 0 0 1 1.67-6.43 4.62 4.62 0 1 1 4.82 7.88 4.78 4.78 0 0 1-6.49-1.45z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#4620ae"
                d="M139.71 109.1a4.62 4.62 0 1 1-4.82-7.88m-92.26-7.86h15c1.79 0 2.57 1 3.08 2.48.31.9 1.23 3.76 1.23 3.76l-5.51.79-1.29-4a.72.72 0 0 0-.68-.5H42.63zm81.78-32.91a2.34 2.34 0 0 1-2.24-2.32 2.24 2.24 0 0 1 4.48 0 2.32 2.32 0 0 1-2.24 2.32zM126.69 42a2.34 2.34 0 0 1-2.32 2.24 2.24 2.24 0 1 1 0-4.48 2.32 2.32 0 0 1 2.32 2.24zm-4.56-15.74a2.34 2.34 0 0 1 2.32-2.26 2.24 2.24 0 1 1 0 4.48 2.32 2.32 0 0 1-2.32-2.22z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#6f38d4"
                d="M53 104.59A6.92 6.92 0 0 1 59.83 98a6.63 6.63 0 1 1 0 13.26 6.86 6.86 0 0 1-6.83-6.67z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#4620ae"
                d="M59.72 106.22a1.68 1.68 0 0 1-1.61-1.66 1.61 1.61 0 0 1 3.21 0 1.66 1.66 0 0 1-1.6 1.66z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#282828"
                d="M28.94 94.5a3 3 0 0 1-2.85-2.95 2.85 2.85 0 1 1 5.7 0 3 3 0 0 1-2.85 2.95z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#f86500"
                d="M29.69 102.24s.76-.25 1.17-2.27c.32-1.62-2-7.42 3.06-7.75 4.68-.3 2.31 3.38 5.62 4.27-1.43.38-.19 1.47-.33 2.74-.22 2-3.15 1.35-1.51 2.69 1.86 1.53-8.01.32-8.01.32z"
                className="style-scope yt-icon"
            ></path>
            <path
                d="M34.58 100.38c-4.5-1.39-7.79.79-9.52 5.84-1.63 4.74-6.62 6.78-7.5 12.19h19.93a14.17 14.17 0 0 1 1.38-8c5.57 3.31 9.62-.54 10.34-4.13a10.49 10.49 0 0 0-.24-5.75H43c0 1.15 1.27 4.18-.73 4.62-1.42.36-3.19-3.38-7.69-4.77z"
                fill="#fff"
                className="style-scope yt-icon"
            ></path>
            <path fill="#6f38d4" d="M37.94 93.89h4.7v1.53h-4.7z" className="style-scope yt-icon"></path>
            <path
                fill="#282828"
                d="M24.21 118.41s-.23 1 .83 3c1 1.86 1.48 2.55 1.07 3.28a2.68 2.68 0 0 0-.2 1.65h1s0-1.25.69-1.09a8.74 8.74 0 0 0 4.2 1.09c1.22 0-2.11-.92-2.58-3.47a5.87 5.87 0 0 1 1.2-4.46z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#4620ae"
                d="M37.77 96.07c-.53 0-.59-.67-.6-1.44s.12-1.39.6-1.39.6.62.6 1.39.01 1.44-.6 1.44zM32 118.41a11.9 11.9 0 0 0 1.21 2.77c1.06 1.59 2.64 2.78 2.42 3.51a2.75 2.75 0 0 0 .21 1.65h1s-.27-1.25.42-1.09a10.55 10.55 0 0 0 4.47 1.09c1.22 0-1.76-1-3-3.48a14.4 14.4 0 0 1-1.2-4.45z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#282828"
                d="M36.31 92.65S36.46 95 35 95.58s-2.32.39-2.1 1.69a2.36 2.36 0 0 1-2.1 2.82c.17-1.49-2.15-4.15 0-6.72a4 4 0 0 1 5.51-.72z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#f86500"
                d="M43 100.58c-.79-5.63 6-5.74 6.63-5s-.88 1-.88 1 1.14-.22 1.4.56-1.07.68-1.07.68 1.07-.08 1.26.64c.27 1-1.73.07-1.36 2.12z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#eee"
                d="M32 111.93c-2.09-4.23 2.6-6.17-.21-9-1.18-1.17-3-1.09-4.53-.76a11.85 11.85 0 0 0-2.21 4c-1.63 4.74-6.62 6.78-7.5 12.19h12.83s3.56-2.51 1.62-6.43z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#4620ae"
                d="M168.57 77.83c-.64-3.22-2.45-6.45 1.34-10.88s4.44-8.31 1.65-11.82-2.7-7.06 1.5-11.9c3.65-4.21.4-8.92-3.06-10.33h-2.06c-3.39 0-4.84 2.06-4.84 4.36s.12 40.79 0 42.73-1 3.27-2.54 3.47h.06c6.72 0 8.64-2.12 7.95-5.63zM63.72 70.34c-1.5-1.78-.24-3.07-1.29-7-.63-2.37-1.84-3.17-2.7-3.43v13.82a2.64 2.64 0 0 0 2.91 2.74h5.61c-.62-3.55-2.6-3.84-4.53-6.13z"
                className="style-scope yt-icon"
            ></path>
            <path
                fill="#eee"
                d="M45.29 100.58H43c0 1.15 1.27 4.18-.73 4.62a1 1 0 0 1-.63-.1c4.36 2.29 4.82-2.23 3.65-4.52z"
                className="style-scope yt-icon"
            ></path>
            <path fill="#6f38d4" d="M47.35 90.19h1.72v3.17h-1.72z" className="style-scope yt-icon"></path>
            <path
                fill="#4620ae"
                d="M45.63 90.19h5.17s.2-1.47-.57-1.48-.7.54-1.07.59-.32-.58-1-.59-.49.59-.86.59-.55-.58-1-.59c-.61-.01-.82 1-.67 1.48z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const ProfileIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const SwitchAccountIcon = ({
    width = '100%',
    height = '100%',
    className,
    fill = '#fff',
}: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M4,20h14v1H3V6h1V20z M6,3v15h15V3H6z M8.02,17c0.36-2.13,1.93-4.1,5.48-4.1s5.12,1.97,5.48,4.1H8.02z M11,8.5 C11,7.12,12.12,6,13.5,6S16,7.12,16,8.5c0,1.38-1.12,2.5-2.5,2.5S11,9.88,11,8.5z M14.21,11.93C15.8,11.6,17,10.19,17,8.5 C17,6.57,15.43,5,13.5,5S10,6.57,10,8.5c0,1.69,1.2,3.1,2.79,3.43c-3.48,0.26-5.4,2.42-5.78,5.07H7V4h13v13h-0.01 C19.61,14.35,17.68,12.19,14.21,11.93z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const SignOutIcon = ({ width = '100%', height = '100%', className, fill = '#fff' }: IIconPropsComponent) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', display: 'block', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);
