'use client'
import Courses from '@/app/components/home/tabs/Courses'
import History from '@/app/components/home/tabs/History'
import Home from '@/app/components/home/tabs/Home'
import Settings from '@/app/components/home/tabs/Settings'
import { TabContext } from '@/app/contexts/TabContext'
import React, { useContext } from 'react'

export default function Container() {
  const tabContext = useContext(TabContext)
  return (
    <main className='flex-1 p-3 overflow-y-scroll h-full w-full'>
        {tabContext?.activeTab === "Home" && <Home/>}
        {tabContext?.activeTab === "Courses" && <Courses/>}
        {tabContext?.activeTab === "History" && <History/>}
        {tabContext?.activeTab === "Settings" && <Settings/>}

    </main>
  )
}
