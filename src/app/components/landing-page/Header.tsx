import Image from 'next/image'
import MenuIC from '@/app/components/landing-page/MenuIC'
export default function Header() {
  
  return (
    <header className='flex items-center p-5 fixed top-0 inset-x-0 backdrop-blur-lg'>
        <div className='flex items-center'>
            <Image
                src="/icons/app-icon.svg"
                alt='app-icon'
                width={60}
                height={60}
                className='invert'
            />
            <h1 className='ml-2 font-bold text-[30px] text-white'>LexiUp 🚀</h1>
        </div>
        <MenuIC/>
    </header>
  )
}
