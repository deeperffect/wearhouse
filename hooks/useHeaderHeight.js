import { useEffect, useRef } from 'react';

export const useHeaderHeight = () => {
    const headerRef = useRef(null);

    const updateHeaderHeight = () => {
        if (headerRef?.current) {
            document.documentElement.style.setProperty(
                '--header-height',
                `${headerRef.current.clientHeight}px`
            );
        }
    };

    useEffect(() => {
        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);

        return () => {
            window.removeEventListener('resize', updateHeaderHeight);
        };
    }, [updateHeaderHeight]);

    return headerRef;
};