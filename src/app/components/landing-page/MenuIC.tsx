'use client'
import React, { useState } from 'react'
import { X, Menu } from 'lucide-react'

export default function MenuIC() {
const [isOpen, setOpen] = useState(false);
return (
    <div className='ml-auto'>
        <div onClick={() => {setOpen(!isOpen)}}>
            {!isOpen ? <Menu color='white' size={30}/> : <X color='white' size={30}/>}
        </div>
        {isOpen && (
                <ul className='fixed right-5 bg-white p-5 rounded-xl text-[#474747] flex flex-col items-center gap-2'>
                    <li>
                        <a href="#features">Tính năng</a>
                    </li>
                    <li>
                        <a href="#why-choose-us">Lợi ích</a>
                    </li>
                </ul>
            )}
    </div>
    
)
}
