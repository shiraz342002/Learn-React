
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
function App() {

  return (
    <>
     <Navbar/>
     <main>
     <div>Welcome to my app</div>
     <AboutPage/>
     <MyButton />
     </main>
     <Footer/>
    </>
  )
}

export default App
