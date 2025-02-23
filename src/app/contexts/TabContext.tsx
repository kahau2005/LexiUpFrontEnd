'use client'
import { createContext, ReactNode, useState } from "react";

interface TabContextType {
    activeTab: string;
    setActiveTab: (value: string) => void;
  }

const TabContext = createContext<TabContextType | undefined>(undefined)
function TabProvider({children}:{children: ReactNode} ){
    const [activeTab, setActiveTab] = useState("Home");
    const value = {
        activeTab,
        setActiveTab
    }
    return(
        <TabContext.Provider value={value}>
            {children}
        </TabContext.Provider>
    )
}

export {TabContext, TabProvider}