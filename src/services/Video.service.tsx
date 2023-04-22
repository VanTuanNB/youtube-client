import IResponse from '@/interfaces/IResponse';
import IVideo from '@/interfaces/IVideo';
import { getInfoUserLoginCookie } from '@/utils/clientCookie.util';
import httpRequest from '@/utils/httpRequest.util';

export const getAll = async () => {
    const videos = await httpRequest.get('video');
    return videos.data;
};

export const getVideoById = async (id: string) => {
    const video = await httpRequest.get('video/' + id);
    return video.data;
};

export const getSuggestSearchVideo = async (keyword: string) => {
    const suggests = await httpRequest.get(`video/suggest?key=${keyword}`);
    return suggests.data;
};

export const getResearchVideo = async (keyword: string) => {
    const researchVideos = await httpRequest.get(`video/research?key=${keyword}`);
    return researchVideos.data;
};

export const getAllVideoByUserId = async (userId: string) => {
    const videos = await httpRequest.get('video/profile/' + userId);
    return videos.data;
};

export const postVideoByUser = async (
    payload: Pick<IVideo, 'title' | 'embed' | 'thumbnail' | 'category'>,
): Promise<IResponse> => {
    const userLogin = getInfoUserLoginCookie();
    if (!userLogin)
        return {
            code: 401,
            success: false,
            message: 'TOKEN_IS_EXPIRES',
            data: null,
            error: 'TOKEN_IS_EXPIRES',
        };
    const created = await httpRequest.post('video', payload, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${userLogin.accessToken}` },
    });
    return created.data;
};
