import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counters/countersSlice'
import postsReducer from '../features/posts/postsSlice'
import counterReducer2 from '../features/counter2/counterSlice2'
const store = configureStore({
    reducer:{
        'counters': counterReducer,
        'posts': postsReducer,
        'counter2': counterReducer2
    }
})

export default store;