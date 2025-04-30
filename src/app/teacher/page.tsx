import YourCoursesView from "@/app/components/teacher/courses/YourCoursesView";
import InfoView from "@/app/components/teacher/Info/InfoView";
import Overview from "@/app/components/teacher/Info/Overview";
import Tips from "@/app/components/teacher/Tips";

export default function Page() {
  
  return (
    <div className='flex flex-col h-full w-full'>
      <InfoView/>
      <Tips/>
      <Overview/>
      <YourCoursesView/>
    </div>
  )
}