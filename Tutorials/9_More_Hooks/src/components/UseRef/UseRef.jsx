import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const UseRefHook = () => {
    // The useRef hook in React is used for accessing and interacting with DOM elements directly, and for holding mutable values that do not cause re-renders when they change. It can be quite useful for managing focus, animations, and other side effects.

    const[num,setNum]=useState(0)

    const inputref1 =useRef(null)
    const inputref2 =useRef(null)
    const inputref3 =useRef(null)

    function HandleClick1(){
        inputref1.current.focus() 
        inputref1.current.style.backgroundColor="red"
        inputref2.current.style.backgroundColor=""
        inputref3.current.style.backgroundColor=""
    }
    function HandleClick2(){
        inputref2.current.focus() 
        inputref1.current.style.backgroundColor=""
        inputref2.current.style.backgroundColor="green"
        inputref3.current.style.backgroundColor=""
    }
    function HandleClick3(){
        inputref3.current.focus() 
        inputref1.current.style.backgroundColor=""
        inputref2.current.style.backgroundColor=""
        inputref3.current.style.backgroundColor="yellow"
    }
    useEffect(()=>{
        console.log("Component Rendered");
        
    })  
  return (
    <div>
        {/* <h2>Count : {num}</h2> */}
        <input type="text" ref={inputref1} />
        <button onClick={HandleClick1}>Cick Me </button>
        <input type="text" ref={inputref2} />
        <button onClick={HandleClick2}>Cick Me </button> <br />
        <input type="text" ref={inputref3} />
        <button onClick={HandleClick3}>Cick Me </button> <br />
    </div>
  )
}

export default UseRefHook
