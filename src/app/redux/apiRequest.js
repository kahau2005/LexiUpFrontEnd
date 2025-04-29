import axios from 'axios'
import { loginFailed, loginStart, loginSuccess } from './authSlice'

export const loginUser = async(user, dispatch, navigate) =>{
    dispatch(loginStart());
    try{
        const res = await axios.post('http://localhost:8000/v1/auth/login', user);
        dispatch(loginSuccess(res.data));
        navigate('/home');
    }catch(error){
        dispatch(loginFailed());
        throw error;
    }
}