'use client'
import { Bolt, BookOpenText, FileClock, House } from 'lucide-react'
import React, { useContext } from 'react'
import './home.css'
import { TabContext } from '@/app/contexts/TabContext'

export default function NavBar(){
    const tabContext = useContext(TabContext)
  return (
    <nav className='flex justify-around bg-[#1b1b1b] py-3 rounded-2xl m-3'>
        <div className={`nav-item ${tabContext?.activeTab === "Home" ? 'actived': ''}`} onClick={() => tabContext?.setActiveTab("Home")}>
            <House size={25}/>
            <span className='text-sm'>Home</span>
        </div>
        <div className={`nav-item ${tabContext?.activeTab === "Courses" ? 'actived': ''}`} onClick={() => tabContext?.setActiveTab("Courses")}>
            <BookOpenText size={25}/>
            <span className='text-sm'>Courses</span>
        </div>
        <div className={`nav-item ${tabContext?.activeTab === "History" ? 'actived': ''}`} onClick={() => tabContext?.setActiveTab("History")}>
            <FileClock size={25}/>
            <span className='text-sm'>History</span>
        </div>
        <div  className={`nav-item ${tabContext?.activeTab === "Settings" ? 'actived': ''}`} onClick={() => tabContext?.setActiveTab("Settings")}>
            <Bolt size={25}/>
            <span className='text-sm'>Settings</span>
        </div>
    </nav>
  )
}
