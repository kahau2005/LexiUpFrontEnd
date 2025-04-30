import { ICourse } from "./ICourse"; // Interface User đã tạo lúc trước

export interface ICourseState {
  course: {
    allCourses: ICourse[] | null;
    isFetching: boolean;
    error: boolean;
  };
}
