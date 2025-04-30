import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import courseReducer from "./courseSlice"

export default configureStore({
    reducer: {
        auth: authReducer,
        course: courseReducer
    }
});