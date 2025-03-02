'use client'
import { createContext, ReactNode, useState } from "react";

interface NavDrawerType {
    isOpen: boolean;
    setOpen: (value: boolean) => void;
  }

const NavDrawerContext = createContext<NavDrawerType | undefined>(undefined)
function NavDrawerProvider({children}:{children: ReactNode} ){
    const [isOpen, setOpen] = useState(false);
    const value = {
        isOpen,
        setOpen
    }
    return(
        <NavDrawerContext.Provider value={value}>
            {children}
        </NavDrawerContext.Provider>
    )
}

export {NavDrawerContext, NavDrawerProvider}