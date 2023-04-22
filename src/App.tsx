import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { rootRouter } from './routes/index.route';
import IRoute from '@/interfaces/IRoute';
import PrimaryLayout from '@/layouts/PrimaryLayout/index.component';
import ProtectPrivateRoute from '@/routes/ProtectPrivateRoutes.component';
import GlobalStyle from '@/components/GlobalStyle/index.component';
import { Fragment } from 'react';

function App() {
    return (
        <GlobalStyle>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        {rootRouter.map((route: IRoute, index: number) => {
                            let Layout = route.layout;
                            const Page = route.component;
                            switch (Layout) {
                                case null:
                                    return (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            children={route.children && route.children}
                                            errorElement={route.errorElement && route.errorElement}
                                            element={
                                                <Fragment key={index}>
                                                    {route.private ? (
                                                        <ProtectPrivateRoute>
                                                            <Page></Page>
                                                        </ProtectPrivateRoute>
                                                    ) : (
                                                        <Page></Page>
                                                    )}
                                                </Fragment>
                                            }
                                        />
                                    );
                                case undefined:
                                    Layout = PrimaryLayout;
                                    return (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            children={route.children && route.children}
                                            errorElement={route.errorElement && route.errorElement}
                                            element={
                                                <Fragment key={index}>
                                                    {route.private ? (
                                                        <ProtectPrivateRoute>
                                                            <Layout>
                                                                <Page></Page>
                                                            </Layout>
                                                        </ProtectPrivateRoute>
                                                    ) : (
                                                        <Layout>
                                                            <Page></Page>
                                                        </Layout>
                                                    )}
                                                </Fragment>
                                            }
                                        />
                                    );
                                default:
                                    return (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            children={route.children && route.children}
                                            errorElement={route.errorElement && route.errorElement}
                                            element={
                                                <Fragment key={index}>
                                                    {route.private ? (
                                                        <ProtectPrivateRoute>
                                                            <Layout>
                                                                <Page></Page>
                                                            </Layout>
                                                        </ProtectPrivateRoute>
                                                    ) : (
                                                        <Layout>
                                                            <Page></Page>
                                                        </Layout>
                                                    )}
                                                </Fragment>
                                            }
                                        />
                                    );
                            }
                        })}
                    </Routes>
                </BrowserRouter>
            </div>
        </GlobalStyle>
    );
}

export default App;
