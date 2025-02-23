
import { Search } from 'lucide-react'
import React from 'react'

export default function SearchBar() {
  return (
    <div className='w-full flex gap-1 items-center border-solid border-white border-1 p-2 rounded-xl'>
        <input className='flex-1 h-[35px] px-2 bg-transparent outline-none' placeholder='Type a word here...'/>
        <Search/>
    </div>
  )
}
