// import Button from "./components/Button/Button"
// import Card from "./components/card"
import Student from "./components/Student/Student"
function App() {
 
  return (
    <>
     {/* card mini project */}
     {/* <Card/>
     <Card/>
     <Card/> */}

     {/* For learning diff method of css */}
     {/* <Button/> */}

    <Student name=' Abdullah' age= {12} isStudent={false}/>
    <Student name=' Shiraz Mazhar' age= {22} isStudent={true}/>
    <Student name=' Affan' age= {32} isStudent={false}/>
    <Student age= {42} isStudent={false}/>

    </>
  )
}

export default App
