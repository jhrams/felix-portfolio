import React, { createContext, useContext, useRef, useEffect, useState } from 'react';

interface NavbarHeightContextProps {
    navbarRef: React.RefObject<HTMLDivElement>;
    navbarHeight: number;
}

const NavbarHeightContext = createContext<NavbarHeightContextProps | undefined>(undefined);

export const NavbarHeightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const navbarRef = useRef<HTMLDivElement>(null);
    const [navbarHeight, setNavbarHeight] = useState<number>(0);

    useEffect(() => {
        if (navbarRef.current) {
            const height = navbarRef.current.offsetHeight;
            setNavbarHeight(height);
        }
    }, []);

    return (
        <NavbarHeightContext.Provider value={{ navbarRef, navbarHeight }}>
            {children}
        </NavbarHeightContext.Provider>
    );
};

export const useNavbarHeight = (): NavbarHeightContextProps => {
    const context = useContext(NavbarHeightContext);
    if (!context) {
        throw new Error('useNavbarHeight must be used within a NavbarHeightProvider');
    }
    return context;
};