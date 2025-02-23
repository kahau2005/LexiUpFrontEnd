import { Progress } from '@heroui/progress'
import { Notebook, WholeWord } from 'lucide-react'
import React from 'react'
import {Tooltip} from "@heroui/tooltip";

export default function Overall() {
  return (
    <div className='w-full h-full'>
        <h1 className='font-bold text-xl text-center'>Course Name</h1>
            <div className='grid grid-cols-2 grid-rows-2 absolute w-[90%] h-[60%] inset-0 m-auto gap-3'>
                <Tooltip 
                className='bg-black'
                content='Overall Score is based on your marks received from the exercises.'>
                    <div className='w-full h-full bg-black/30 rounded-2xl p-2 flex flex-col items-center font-bold text-lg row-span-2'>
                        <span className='text-xl'>Overall Score</span>
                        <div className='flex-1 w-full flex items-center justify-center font-bold text-[40px] text-[#ff5d5d]'>
                            <h1>8</h1>
                        </div>
                        <p className='text-xl'>Good</p>
                    </div>
                </Tooltip>
                <div className='w-full h-full flex flex-col font-bold text-sm justify-center border-solid border-2 p-2 rounded-md truncate'>
                    <p>🏆 Your Rank: #19</p>
                    <p>👦 Members: 100</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <span className='font-bold text-lg'>Progress</span>
                    <Progress
                        maxValue={100}
                        value={60}
                        aria-label='complete'
                        color='warning'
                    />
                </div>
            </div>
            <div className='flex items-center gap-3 bottom-0 right-0 absolute bg-black/60 px-2 py-1 rounded-md m-2 font-bold text-sm'>
                <div className='flex items-center gap-1'>
                    <Notebook/>
                    <p>20 Topics</p>
                </div>
                <div className='flex items-center gap-1'>
                    <WholeWord/>
                    <p>1259 Words</p>
                </div>
            </div>
    </div>
  )
}
