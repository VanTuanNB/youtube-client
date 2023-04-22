import { getInfoUserLoginCookie } from '@/utils/clientCookie.util';
import httpRequest from '@/utils/httpRequest.util';

export const getAllShort = async () => {
    const shorts = await httpRequest.get('short');
    return shorts.data;
};

export const getShortStream = async (id: string) => {
    const stream = await httpRequest.get('short/stream/' + id);
    return stream;
};

export const postShortStream = async (payload: { title: string; file: File; thumbnail: string }) => {
    const userLogin = getInfoUserLoginCookie();
    if (!userLogin)
        return {
            code: 401,
            success: false,
            message: 'TOKEN_IS_EXPIRES',
            data: null,
            error: 'TOKEN_IS_EXPIRES',
        };
    const formData = new FormData();
    formData.append('title', payload.title);
    formData.append('thumbnail', payload.thumbnail);
    formData.append('file', payload.file);
    const created = await httpRequest.post('short', formData, {
        headers: { Authorization: `Bearer ${userLogin.accessToken}` },
        withCredentials: true,
    });
    return created.data;
};
