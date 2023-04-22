import httpRequest from '@/utils/httpRequest.util';

export const logoutService = async (accessToken: string) => {
    const logout = await httpRequest.post('/auth/google/logout', null, {
        withCredentials: true,
        headers: { Authorization: 'Bearer ' + accessToken },
    });
    return logout.data;
};
