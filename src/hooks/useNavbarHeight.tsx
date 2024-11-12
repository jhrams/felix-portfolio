import { useRef, useEffect, useState } from 'react';

const useNavbarHeight = (): [React.RefObject<HTMLDivElement>, number] => {
    const navbarRef = useRef<HTMLDivElement>(null);
    const [navbarHeight, setNavbarHeight] = useState<number>(0);

    useEffect(() => {
        if (navbarRef.current) {
            const height = navbarRef.current.offsetHeight;
            setNavbarHeight(height);
        }
    }, []);

    return [navbarRef, navbarHeight];
};

export default useNavbarHeight;