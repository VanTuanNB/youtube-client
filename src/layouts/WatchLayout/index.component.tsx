import { ReactElement } from 'react';

function WatchLayoutComponent({ children }: { children: ReactElement }) {
    return (
        <>
            <h1>Watch Layout Component</h1>
            {children}
        </>
    );
}

export default WatchLayoutComponent;
