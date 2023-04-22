import httpRequest from '@/utils/httpRequest.util';

export const getUserById = async (id: string) => {
    const user = await httpRequest.get(`user/` + id);
    return user.data;
};

export const getUserByNickname = async (nickname: string) => {
    const user = await httpRequest.get(`user/nickname?key=` + nickname);
    return user.data;
};
