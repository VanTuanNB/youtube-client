import { MutableRefObject } from 'react';
import { useEffect, useMemo, useState } from 'react';

export default function useElementIntersectionObserver<T = any>(
    options: IntersectionObserverInit,
    targetRef: MutableRefObject<T | any>,
): boolean {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries; //const entry = entries[0]
        setIsVisible(entry.isIntersecting);
    };
    const optionsMemo = useMemo(() => {
        return options;
    }, [options]);

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo);
        const currentTarget: Element = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        };
    }, [targetRef, optionsMemo]);
    return isVisible;
}
