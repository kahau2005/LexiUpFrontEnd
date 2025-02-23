'use client'
import { createContext, ReactNode, useState } from "react";

interface CourseContextType {
    courseDetails: number;
    setCourseDetails: (value: number) => void;
  }

const CourseContext = createContext<CourseContextType | undefined>(undefined)
function CourseProvider({children}:{children: ReactNode} ){
    const [courseDetails, setCourseDetails] = useState(0);
    const value = {
        courseDetails,
        setCourseDetails
    }
    return(
        <CourseContext.Provider value={value}>
            {children}
        </CourseContext.Provider>
    )
}

export {CourseContext, CourseProvider}