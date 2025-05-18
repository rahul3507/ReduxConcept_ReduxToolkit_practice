import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement2, increment2 } from '../../features/counter2/counterSlice2';

export default function Counter2() {
    const counter2 = useSelector((state)=>state.counter2);
    const dispatch = useDispatch();
    const handleIncrement= (counterId)=>{
        dispatch(increment2(counterId))
    }
    const handleDecrement= (counterId)=>{
        dispatch(decrement2(counterId))
    }

    const totalvalue = counter2.reduce(
         (sum, currentValue)=> sum+currentValue.value,0
    )
  return (
            <div>
                {
                    counter2.map((counter)=>(
                        <div className='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
                            <h1 className='text-6xl'>{counter.value}</h1>
                            <div className="flex space-x-3">
                                <button onClick={()=>handleIncrement(counter.id)}>Increment</button>
                        
                                <button className='bg-red-400' onClick={()=>handleDecrement(counter.id)}>Decrement</button>
                            </div>
                        </div>
                    ))
                }
                <div className='p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
                    <div className='text-2xl font-semibold'>
                        Total Count : {totalvalue}
                    </div>
                </div>
            </div>
                
          
  )
}
