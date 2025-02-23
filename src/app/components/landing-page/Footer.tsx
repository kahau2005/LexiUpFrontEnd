import React from 'react'
import Image from 'next/image'
import {Facebook, Instagram} from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-[#4b4b4b] p-5 flex flex-col items-center text-center'>
        <div>
            <div>
                <Image
                    src={'/icons/app-icon.svg'}
                    alt='app icon'
                    width={50}
                    height={50}
                    className='m-auto'
                />
                <p className='font-bold text-2xl'>LexiUp 🚀</p>
                <p className='text-center'>25/18/10 Đoàn Giỏi quận Tân Phú,<br/> Thành phố Hồ Chí Minh</p>
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Liên hệ</h1>
                <p>Điện thoại: 0123456789</p>
                <p>Email: contact@lexiup.edu.vn</p>
                <h1 className='font-bold text-2xl'>Mạng xã hội</h1>
                <div>
                    <div className='flex items-center justify-around p-5'>
                        <Facebook size={40}/>
                        <Instagram size={40}/>
                    </div>
                </div>
                <div className='w-full'>
                    <iframe className='w-full h-[300px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1700921275033!2d106.61140117587993!3d10.798281389351862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b30e795aa7d%3A0x21b3600540561a24!2zMjUgxJBvw6BuIEdp4buPaSwgU8ahbiBL4buzLCBUw6JuIFBow7osIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1723467422982!5m2!1svi!2s" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div></div>
        </div>
    </footer>
  )
}
