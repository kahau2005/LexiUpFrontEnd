import Reason from '@/app/components/landing-page/why-choose-us/Reason'
import React from 'react'

export default function WhyChooseUs() {
  return (
    <section id='why-choose-us' className='h-full px-[10px] pt-[100px] flex flex-col items-center justify-center'>
        <h1 className='text-center font-bold text-[30px]'>
            Tại sao chọn <span className='text-strong-color'>học từ vựng với chúng tôi?</span>
        </h1>
        <div className='flex flex-col gap-10 mt-20 justify-center'>
            <Reason img='/icons/speed.png' reason='Học nhanh hơn nhiều lần so với cách truyền thống.'/>
            <Reason img='/icons/brain.png' reason='Ghi nhớ từ lâu nhờ phương pháp khoa học.'/>
            <Reason img='/icons/development.png' reason='Thích hợp cho mọi trình độ: từ cơ bản đến nâng cao.'/>
        </div>
    </section>
  )
}
