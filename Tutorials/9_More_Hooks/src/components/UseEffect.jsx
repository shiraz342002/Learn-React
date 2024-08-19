import React, { useEffect } from 'react'
import { useState } from 'react'
// `useEffect` is a React Hook that allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after the render and can optionally clean up after itself. It accepts a function and a dependency array, running the effect when the specified dependencies change.
const UseEffectHook = () => {
    const [count,setCount]=useState(0)
    const [color,setColor]=useState("green")
    useEffect(()=>{
      document.title=`Count: ${count} Color: ${color}`
    },[count,color])

    function addCount(){
      setCount(()=>count+1)
    }

    function changeColor(){
        setColor(c=>c==="green"?"red":"green")
    }
  return (
    <div>
          <p style={{ color: color }}>Count: {count}</p>
           <button onClick={addCount}>Add</button>
           <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default UseEffectHook
