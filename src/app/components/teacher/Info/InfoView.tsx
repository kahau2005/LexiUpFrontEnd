import { Button } from '@heroui/button'
import { House } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function InfoView() {
  return (
    <div className='w-full h-[40%] bg-[#DFD0B8]/50 rounded-b-[30px]'>
        <div className='h-full relative'>
            <Image
            className='absolute w-[200px] h-full bottom-0 right-0'
            style={{objectFit: 'cover'}}
            alt={'teacher'}
            src={'/images/teacher_0.png'}
            width={500}
            height={500}/>
            <div className='absolute bottom-0 m-5 text-[#ececec] leading-none'>
                <p className=' text-[35px] font-[700] '>Ms. <br /> Thu Thuy</p>
                <div className='my-2'>
                  <div className='flex items-center'>
                      <Image alt='start' width={20} height={20} src={'/icons/star.png'}/>
                      <Image alt='start' width={20} height={20} src={'/icons/star.png'}/>
                      <Image alt='start' width={20} height={20} src={'/icons/star.png'}/>
                      <Image alt='start' width={20} height={20} src={'/icons/star.png'}/>
                      <Image alt='start' width={20} height={20} src={'/icons/star.png'}/>
                      <span>(20)</span>
                  </div>
                </div>
                <p className='pl-1'>ID: 2937827</p>
            </div>
            <Button className='bg-black/30 w-[50px] h-[50px] flex items-center justify-center rounded-full m-5 absolute p-0'>
              <House className='w-[30px] h-[30px]' color='#DFD0B8'/>
            </Button>
        </div>
        
    </div>
  )
}
