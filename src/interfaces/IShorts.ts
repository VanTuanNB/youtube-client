export default interface IShort {
    _id: string;
    title: string;
    shortVideo: string;
    owner: {
        _id: string;
        username: string;
        nickname: string;
        avatarUrl: string;
    };
    likeCount: string;
    dislikeCount: string;
    createdAt: string;
    updatedAt: string;
}
