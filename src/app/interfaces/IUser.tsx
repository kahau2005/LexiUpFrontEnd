export interface IUser {
    _id: string;
    username: string;
    email: string;
    phone_number?: string;
    full_name: string;
    teacher: boolean;
    createdAt: string;
    updatedAt: string;
    accessToken: string;
  }
  