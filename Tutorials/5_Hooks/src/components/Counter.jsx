import React,{useState} from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decement=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }
  return (
    <div>
         <h1 style={{ fontSize: "84px" }}>{count}</h1>
      <button onClick={increment} className='increment'>Increment</button>
      <button onClick={decement} className='decrement'>Decremnt</button>
      <button onClick={reset} className='reset'>Reset</button>
    </div>
  )
}

export default Counter
