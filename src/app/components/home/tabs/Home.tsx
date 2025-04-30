import ContinueLearning from '@/app/components/home/tabs/home/ContinueLearning'
import InfoCard from '@/app/components/home/tabs/home/InfoCard'
import Popular from '@/app/components/home/tabs/home/Popular'
import { IAuthState } from '@/app/interfaces/IAuthState';
import { getAllCourses } from '@/app/redux/apiRequest';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function Home() {

  const router = useRouter();
  const user = useSelector((state: {auth: IAuthState}) => state.auth.login.currentUser)
  const dispatch = useDispatch();

  useEffect(() => {
    if(!user) router.push('/login');
    if(user?.accessToken){
      getAllCourses(user?.accessToken, dispatch);
    }
  },[])


  return (
    <div>
      <InfoCard/>
      <Popular/>
      <ContinueLearning/>
    </div>
  )
}
