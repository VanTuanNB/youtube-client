import { ReactElement } from 'react';
import './Grid.scss';
import './GlobalStyle.scss';

function GlobalStyle({ children }: { children: ReactElement }): ReactElement {
    return <>{children}</>;
}

export default GlobalStyle;
