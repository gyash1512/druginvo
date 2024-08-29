import { useState} from 'react'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Alert from './alert'
function App() {
  const [alert,setAlert] = useState();
  return (
    <>
      <Alert alert={alert} setAlert={setAlert} />
      
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/login' element={<Login alert={alert} setAlert={setAlert}/>}></Route>
        </Routes>
    </>
  )
}

export default App
