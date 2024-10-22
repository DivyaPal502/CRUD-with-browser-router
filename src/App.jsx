import React,{lazy,Suspense} from "react"
import "./global.css"
import Navbar from "./component/navbar/Navbar"
import { BrowserRouter,Routes, Route } from "react-router-dom"//routes for more than one Route
import Login from "./component/login/Login"
import Home from "./component/home/Home"
import Register from "./component/register/Register"
import NotFound from "./component/notfound/NotFound"
import { Toaster } from "react-hot-toast"
// import Allusers from "./component/allusers/Allusers"
import EditUser from "./component/edituser/EditUser"
import Profile from "./component/profile/Profile"
import PrivateRoute from "./component/profile/PrivateRoute"
import Spinner from "./component/spinner/Spinner"

const Allusers =lazy(()=> import("./component/allusers/Allusers"))
function App() {

  return (
    <main>
      <BrowserRouter>
      <Toaster/>
      <Navbar/>
      <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/allusers" element={<Allusers/>}/>
        <Route path="/edit/:id" element={<EditUser/>}/>
        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Suspense>
    
      </BrowserRouter>
    </main>
  )
}

export default App

// npm i axios