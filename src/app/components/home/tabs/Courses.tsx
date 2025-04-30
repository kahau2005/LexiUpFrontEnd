import AvailableCourse from '@/app/components/home/tabs/courses/AvailableCourse'
import CourseDetails from '@/app/components/home/tabs/courses/details/CourseDetails'
import ExercisePage from '@/app/components/home/tabs/courses/exercises/ExercisePage'
import Learn from '@/app/components/home/tabs/courses/learn/Learn'
import YourCourse from '@/app/components/home/tabs/courses/YourCourse'
import { CourseContext } from '@/app/contexts/CourseContext'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbEllipsis } from '@/components/ui/breadcrumb'
import { useContext } from 'react'

export default function Courses() {
  const courseContext = useContext(CourseContext)

  // Nếu courseContext bị undefined, gán giá trị mặc định
  const courseDetails = courseContext?.courseDetails ?? 0

  const courseName = "rkgoemjjr eoirj goieeo eorjg egrjio eo eoi "

  return (
    <div className='w-full h-full'>
      {/* Chỉ hiển thị breadcrumb nếu courseDetails > 0 */}
      {courseDetails > 0 && (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" onClick={() => courseContext?.setCourseDetails(0)}>Courses</BreadcrumbLink>
            </BreadcrumbItem>

            {courseDetails > 0 && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" onClick={() => courseContext?.setCourseDetails(1)}>
                    {courseName.length > 20 ? <BreadcrumbEllipsis /> : courseName}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}

            {courseDetails === 2 && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Cambrige 10</BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}

            {courseDetails === 3 && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Exercise 1</BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      )}

      {/* Render nội dung dựa trên courseDetails */}
      <div className="mt-4 w-full">
        {courseDetails === 1 ? (
          <CourseDetails />
        ) : courseDetails === 0 ? (
          <>
            <YourCourse />
            <AvailableCourse/>
          </>
        ) : courseDetails === 2 ? (
          <Learn />
        ) : (
          <ExercisePage/>
        )}
      </div>
    </div>
  )
}
