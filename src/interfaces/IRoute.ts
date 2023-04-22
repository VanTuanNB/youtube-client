import { FunctionComponent, ReactElement, ReactNode } from 'react';

export default interface IRoute {
    path: string;
    component: FunctionComponent;
    layout?: (({ children }: { children: ReactElement }) => ReactElement) | null;
    private?: boolean;
    children?: ReactNode;
    errorElement?: ReactNode;
}
