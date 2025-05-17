
import './App.css'
import Counter from './components/Counter'
import Stats from './components/Stats'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counters/countersSlice'

function App() {
    const counters= useSelector((state)=> state.counters)
    const dispatch = useDispatch();
    const handleIncrement = (counterId)=>{
        dispatch(increment(counterId))
    }

    const handleDecrement = (counterId)=>{
        dispatch(decrement(counterId))
    }

    const totalCount = counters.reduce(
      (sum, currentValue)=> sum+currentValue.value,0
    )

  return (
    <div className='w-screen h-screen p-10 bg-gray-100 text-slate-700'>
      <h1 className='max-w-md mx-auto text-2xl text-center font-bold'>
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {
          counters.map((counter)=>(
            <Counter
                    key={counter.id} 
                    count={counter.value} 
                    onIncrement={()=>handleIncrement(counter.id)} 
                    onDecrement={()=>handleDecrement(counter.id)} />
          ))
        }
        <Stats totalCount={totalCount}/>
      </div>
    </div>
  )
}

export default App
