import React from "react";
//import { Card, CardContent } from "../../../../../components/ui/card";
import CourseCard from "@/app/components/home/tabs/courses/CourseCard";
import HorizontalCardView from "@/app/components/HorizontalCardView";

export default function Popular() {
  const courseData = [
    { title: "React Basics", thumbnail: "/images/course_thumbnail.png" },
    { title: "TypeScript for Beginners", thumbnail: "/images/course_thumbnail.png" },
  ];
  return (
    <div className="mt-3">
      <h1 className="title">Popular Topics</h1>
        <HorizontalCardView data={courseData} CardComponent={CourseCard} />
    </div>
  );
}
