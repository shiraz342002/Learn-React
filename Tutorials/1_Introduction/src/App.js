import './App.css';
import { useState } from 'react';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';

function App() {
  const [value,setvalue]=useState(0)
  return (
    //Increment Button
    <div className='App'>
    {/* functional Component */}
    <Navbar logoText="CodingWithShiraz"/> 
    <div className='value'>{value}</div>
    <button onClick={()=>{setvalue(value+1)}}>Click me</button>
    <Footer/>
  </div> 
 );
}

export default App;
