import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  //The value of will presist and will not re render 
  let a=useRef(0) //This will not reinitialize
  useEffect(() => {
    a.current = a.current + 1
    console.log(`rerendering and the value of a is ${a.current}..`) 
  });
  const btnRef=useRef() // WE can use this ref anywhere in the code
  useEffect(() => {
    console.log('First Rendering....');
    btnRef.current.style.backgroundColor="red"
  }, [])
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={()=>{btnRef.current.style.display="none"}}>Hide</button>
    </>
  )
}

export default App
