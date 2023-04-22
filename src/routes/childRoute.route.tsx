import HomeProfile from '@/layouts/components/Profile/HomeProfile/index.component';
import ProfileCreateShort from '@/layouts/components/Profile/ProfileCreateShort/index.component';
import ProfileCreateVideo from '@/layouts/components/Profile/ProfileCreateVideo/index.component';
import { Fragment } from 'react';
import { Route } from 'react-router-dom';

export const ProfileChildrenRoute = (
    <Fragment>
        <Route path="create" Component={ProfileCreateVideo} />
        <Route path="create-short" Component={ProfileCreateShort} />
        <Route path="" Component={HomeProfile} />
    </Fragment>
);
