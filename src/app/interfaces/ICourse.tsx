export interface ICourse {
    _id: string;
    course_name: string;
    owner: string;
    members:[];
    topics: [];
    exercises: [];
    thumbnail: string,
    createdAt: string;
    updatedAt: string;
  }
  