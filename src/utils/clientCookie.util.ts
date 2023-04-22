import IAuthUser from '@/interfaces/IAuthUser';

const getCookieAuth = (cname: string): string => {
    const isExit = decodeURIComponent(document.cookie.split('=')[0]);
    return isExit === cname ? decodeURIComponent(document.cookie.split('=')[1]) : '';
};

export const getInfoUserLoginCookie = (): IAuthUser | null => {
    const info: string = getCookieAuth('login');
    if (!info) return null;
    const parse: IAuthUser = JSON.parse(info);
    return parse;
};
