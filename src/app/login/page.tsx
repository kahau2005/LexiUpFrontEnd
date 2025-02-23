import WaveBg from '@/app/components/login/bg/WaveBg'
import LoginForm from '@/app/components/login/LoginForm'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

export default function page() {
  return (
    <main className="relative bg-white">
        <WaveBg />
        <div className='absolute top-32 max-w-[60%] text-white ml-5'>
          <p className='font-bold text-5xl'>LexiUp 🚀</p>
          <p className='text-sm mt-3 text-[#e9e9e9]'>Nền tảng học từ vựng thông minh,<br></br> giúp bạn mở rộng vốn từ nhanh chóng</p>
        </div>
        <LoginForm/>
        <Toaster/>
    </main>
  )
}
