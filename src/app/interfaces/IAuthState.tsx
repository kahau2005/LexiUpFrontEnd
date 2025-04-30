import { IUser } from "./IUser"; // Interface User đã tạo lúc trước

export interface IAuthState {
  login: {
    currentUser: IUser | null;
    isFetching: boolean;
    error: boolean;
  };
}
