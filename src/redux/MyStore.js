import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice'

const Mystore = configureStore({
    reducer: {
        user: UserReducer

    }
})
export default Mystore;