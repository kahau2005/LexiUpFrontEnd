import Container from '@/app/components/home/Container'
import Header from '@/app/components/home/Header'
import NavBar from '@/app/components/home/NavBar'

export default function Page() {
  
  return (
    <div className='flex flex-col h-full w-full'>
      <Header/>
      <Container/>
      <NavBar/>
    </div>
  )
}
