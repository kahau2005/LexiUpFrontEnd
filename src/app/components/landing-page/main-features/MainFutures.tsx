import React from 'react'
import Image from 'next/image'
import Card from '@/app/components/landing-page/main-features/Card'

export default function MainFutures() {
    const features = [
        {
            img: '/images/smart.png',
            title: 'Phương pháp học thông minh',
            decription: 'Flashcards, bài tập,...',
        },
        {
            img: '/images/persionalize.png',
            title: 'Cá nhân hóa lộ trình học',
            decription: 'Đề xuất từ vựng theo cấp độ của bạn.',
        },
        {
            img: '/images/test.png',
            title: 'Hệ thống kiểm tra hấp dẫn',
            decription: 'Kiểm tra áp dụng từ.',
        },
        {
            img: '/images/speak.png',
            title: 'Phát âm chuẩn',
            decription: 'Phát âm từ vựng dựa trên wikipedia audio và phiên âm',
        }
    ]
  return (
    <section id='features' className='h-full pt-[100px] p-5 flex flex-col items-center justify-center'>
        <div className='flex items-end'>
            <Image 
                src={'/icons/features.png'}
                width={40}
                height={40}
                alt='features'
            />
            <span className='ml-2 font-bold text-[20px]'>Các tính năng chính</span>
        </div>

    <div className='grid grid-cols-2 grid-rows-2 gap-4 mt-5'>
        {features.map((item, index) => {
            return <Card key={index} icon={item.img} title={item.title} description={item.decription}/>
        })}
    </div>
        
    </section>
  )
}
