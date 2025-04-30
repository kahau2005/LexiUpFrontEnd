import axios from 'axios'
import { loginFailed, loginStart, loginSuccess } from './authSlice'
import { courseFailed, courseStart, courseSuccess } from './courseSlice';
export const loginUser = async(user, dispatch, navigate) =>{
    dispatch(loginStart());
    try{
        const res = await axios.post('http://192.168.1.3:8000/v1/auth/login', user);
        dispatch(loginSuccess(res.data));
        navigate('/home');
    }catch(error){
        dispatch(loginFailed());
        throw error;
    }
}

export const getAllCourses = async (accessToken, dispatch) => {
    dispatch(courseStart());
    try{
        const res = await axios.get('http://192.168.1.3:8000/courses',
            {
                headers: {token: `Bearer ${accessToken}`}
            }
        )
        dispatch(courseSuccess(res.data));
    }catch(err){
        dispatch(courseFailed());
        throw err;
    }
}