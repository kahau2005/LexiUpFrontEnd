'use client'
import { Bolt, BookOpenText, FileClock, House } from 'lucide-react'
import React, { useContext } from 'react'
import './home.css'
import { TabContext } from '@/app/contexts/TabContext'
import { NavDrawerContext } from '@/app/contexts/NavDrawerContext'

export default function NavBar(){
    const tabContext = useContext(TabContext)
    const navDrawerContext = useContext(NavDrawerContext);
  return (
    <nav className='flex justify-around bg-[#1b1b1b] py-3 rounded-2xl mb-[env(safe-area-inset-bottom)]'>
        <div className={`nav-item ${tabContext?.activeTab === "Home" ? 'actived': ''}`} onClick={() => {
                tabContext?.setActiveTab("Home")
                navDrawerContext?.setOpen(false)
            }}>
            <House size={25}/>
            <span className='text-sm'>Home</span>
        </div>
        <div className={`nav-item ${tabContext?.activeTab === "Courses" ? 'actived': ''}`} onClick={() => {
                tabContext?.setActiveTab("Courses") 
                navDrawerContext?.setOpen(false)
            }}>
            <BookOpenText size={25}/>
            <span className='text-sm'>Courses</span>
        </div>
        <div className={`nav-item ${tabContext?.activeTab === "History" ? 'actived': ''}`} onClick={() => {
                tabContext?.setActiveTab("History")
                navDrawerContext?.setOpen(false)
            }}>
            <FileClock size={25}/>
            <span className='text-sm'>History</span>
        </div>
        <div  className={`nav-item ${tabContext?.activeTab === "Settings" ? 'actived': ''}`} onClick={() => {
                tabContext?.setActiveTab("Settings")
                navDrawerContext?.setOpen(false)
            }}>
            <Bolt size={25}/>
            <span className='text-sm'>Settings</span>
        </div>
    </nav>
  )
}
