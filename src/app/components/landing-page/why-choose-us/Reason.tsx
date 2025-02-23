import React from 'react'
import Image from 'next/image'

export default function Reason(props: {img: string, reason:string}) {
  return (
    <div className='flex items-center px-5 mx-5 bg-[#53470e] bg-opacity-40 py-2 rounded-3xl shadow-[0px_5px_10px_rgba(0,0,0,0.5)] hover:shadow-[0px_10px_20px_rgba(0,0,0,0.7)] transition-all duration-300'>
        <Image
        style={{objectFit: 'cover'}}
            src={props.img}
            alt='reason-image'
            width={40}
            height={40}
            className='w-[50px] h-[50px]'
        />
        <h1 className='ml-4 text-[18px]'>{props.reason}</h1>
    </div>
  )
}
