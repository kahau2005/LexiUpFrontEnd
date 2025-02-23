import Image from 'next/image';
import React from 'react'

export default function Card(props: { icon: string; title: string; description: string}) {
  return (
    <div className={`p-2 rounded-2xl bg-[#1d3c7e] bg-opacity-50 max-w-[170px]`}>
        <Image
            src={props.icon}
            alt={props.title}
            width={200}
            height={200}
            className='bg-[#ffffff3d] rounded-xl'
        />
        <h1 className='font-bold text-lg mt-4'>{props.title}</h1>
        <p className='text-sm text-[#dbdbdb] my-2'>{props.description}</p>
    </div>
  )
}
