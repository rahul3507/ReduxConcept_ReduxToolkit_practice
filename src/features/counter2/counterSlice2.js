import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 1,
        value: 0
    },
    {
        id:2,
        value:0
    }
]

const counterSlice2 = createSlice(
    {
        name: 'counter2',
        initialState,
        reducers:{
                    increment2:(state,action)=>{
                        const index = state.findIndex(
                            (c)=>c.id=== action.payload
                        )
                        state[index].value++
                    },
                    decrement2:(state,action)=>{
                        const index = state.findIndex(
                            (c)=> c.id===action.payload
                        )
                        state[index].value--;
                    }
                }
    }
)
export default counterSlice2.reducer;
export const {increment2, decrement2} = counterSlice2.actions