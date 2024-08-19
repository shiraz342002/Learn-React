
import NavBar from './Nabvar/components'
import { createBrowserRouter,RouterProvider,Navigate  } from 'react-router-dom'
import Home from './Nabvar/Home'
import Login from './Nabvar/Login'
import Contact from './Nabvar/Contact'
import User from './Nabvar/User'
function App() {
  const router = createBrowserRouter([
      {  path:"/",
        element: <Navigate to="/home" />  
      },{
        path: "/home",
        element: <><NavBar/><Home /></>
      },
      {
        path:"/login",
        element:<><NavBar/><Login /></>
      }
      ,{
        path:"/contact",
        element:<><NavBar/><Contact /></>
      },{
        path:"/user/:username",
        element:<><NavBar/><User/></>
      }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
