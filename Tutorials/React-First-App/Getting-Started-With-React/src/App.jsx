
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// function MyButton() {
//   return (
//     <button>I'm a button</button>
//   );
// }
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }
}
function App() {
  return (
    // https://youtu.be/S4VH8hddg8c?t=965
    <>
     <Navbar/>
     <main>
     <div>Welcome to my app</div>
     <h1>{user.name}</h1>
     <img src={user.imageUrl} alt="" />
     <br />
     </main>
     <Footer/>
    </>
  )
}
export default App
