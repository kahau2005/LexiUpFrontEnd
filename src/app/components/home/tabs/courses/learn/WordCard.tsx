import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '@heroui/button';
import { Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WordCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className='relative w-full h-[500px] rounded-2xl overflow-hidden flex items-center justify-center perspective-1000'
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className='relative w-full h-full flex flex-col items-center cursor-pointer'
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className='absolute w-full h-full flex flex-col items-center justify-center bg-white rounded-2xl' style={{ backfaceVisibility: 'hidden' }}>
          <Image
            alt='word demonstrate'
            src={'/images/topic_demo.jpg'}
            height={500}
            width={500}
            className='object-cover w-full flex-1 p-2 rounded-2xl'
          />
          <span className='text-[30px] font-bold text-black text-center'>Hello</span>
          <span className='text-[18px] text-[#383838]'>/heˈləʊ/</span>
          <Button className=' bg-slate-600 p-2 my-3 rounded-full h-[50px] w-[50px]' >
            <Volume2 color='#d2d5d9' size={50} />
          </Button>
          
          <div className='w-[90%] flex justify-around mb-3 bg-[#333]/70 p-2 rounded-xl'>
            <Button color='success'>Easy</Button>
            <Button color='warning'>Normal</Button>
            <Button color='danger'>Hard</Button>
          </div>
        </div>

        <div className='absolute w-full h-full p-3 bg-gray-200 rounded-2xl overflow-y-auto' style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
          <span className='text-[24px] font-semibold text-black text-center'>Definition:</span>
          <p className='text-[18px] text-[#383838]'>A greeting or expression of goodwill.</p>
          <span className='text-[24px] font-semibold text-black text-center'>Vietnamese:</span>
          <p className='text-[18px] text-[#383838]'>A greeting or expression of goodwill.</p>
          <span className='text-[24px] font-semibold text-black text-center'>Example:</span>
          <p className='text-[18px] text-[#383838]'>A greeting or expression of goodwill.</p>
        </div>
      </motion.div>
    </div>
  );
}
