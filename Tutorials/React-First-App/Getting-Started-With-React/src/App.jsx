
import { useState } from 'react';
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ShoppingList from './components/food';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 120,
};
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

function MyButton(){
  const [count,setCount]=useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return(
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
function App() {
  return (
    <>
     <Navbar/>
     <main>
     <div>Welcome to my app</div>
     <h1>{user.name}</h1>
     <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
     <br />
     <MyButton/>
     <MyButton />
     <ShoppingList/>
     </main>
     <Footer/>
    </>
  )
}
export default App
