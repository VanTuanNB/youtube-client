import IRoute from '@/interfaces/IRoute';
import HomeComponent from '@/layouts/components/Home/index.component';
import Profile from '@/layouts/components/Profile/index.component';
import Search from '@/layouts/components/Search/index.component';
import Watch from '@/layouts/components/Watch/index.component';
import { ProfileChildrenRoute } from './childRoute.route';
import NotFoundLayout from '@/layouts/NotFoundLayout/index.component';
import Logout from '@/layouts/components/Auth/Logout/Logout.component';
import Short from '@/layouts/components/Short/index.component';

export const rootRouter: Array<IRoute> = [
    { path: '/shorts', component: Short },
    { path: '/watch', component: Watch },
    { path: '/results', component: Search },
    { path: '/error', component: NotFoundLayout, layout: null },
    { path: '/a', component: HomeComponent, layout: null },
    // { path: '/b', component: HomeComponent, layout: WatchLayoutComponent },
    // { path: '/private', component: HomeComponent, layout: WatchLayoutComponent, private: true },
    { path: '/logout', component: Logout, layout: null },
    { path: '/channel', component: NotFoundLayout },
    { path: '/playlist', component: NotFoundLayout },
    { path: '/playlistLike', component: NotFoundLayout },
    { path: '/music', component: NotFoundLayout },
    { path: '/gaming', component: NotFoundLayout },
    { path: '/sports', component: NotFoundLayout },
    { path: '/studio', component: NotFoundLayout },
    { path: '/kids', component: NotFoundLayout },
    { path: '/account', component: NotFoundLayout },
    { path: '/reporthistory', component: NotFoundLayout },
    { path: '/news', component: NotFoundLayout },
    { path: '/feed/subscriptions', component: NotFoundLayout },
    { path: '/feed/library', component: NotFoundLayout },
    { path: '/feed/history', component: NotFoundLayout },
    { path: '/feed/trending', component: NotFoundLayout },
    { path: '/help', component: NotFoundLayout },
    { path: '/feedback', component: NotFoundLayout },
    { path: '/:nickname', component: Profile, children: ProfileChildrenRoute, errorElement: <NotFoundLayout /> },
    { path: '/', component: HomeComponent },
];
