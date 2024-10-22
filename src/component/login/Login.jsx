import React,{Fragment, useEffect, useState} from 'react'
import style from './login.module.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  let [loginUser, setLoginUser] = useState({
    email:"",
    password:"",
  });
  let [registeredUser, setRegisteredUser] = useState(null);

  let navigate = useNavigate();

  let loginHandle =(e)=>{
    let {name, value} = e.target;
    setLoginUser({...loginUser,[name]: value});

  };

  useEffect(()=>{
    async function fetchRegisteredUser(){
      let {data} = await axios.get("http://localhost:5000/users");
      console.log(data)
      setRegisteredUser(data)
    }
    fetchRegisteredUser();
  },[])

  let handleSubmit =(e)=>{
   e.preventDefault();
   console.log(loginUser);
  let authUser = registeredUser.find((user)=>{

    return (

      user.email === loginUser.email && user.password === loginUser.password
    );

   });
   console.log(authUser);
   if(authUser) {
    sessionStorage.setItem("TOKEN", authUser.id);
    navigate("/profile");
   }
   else {
    toast.error("Not Registered");
    navigate("/register")
   }
  };

  return (
    <Fragment>
    <form id={style.form}>
        <legend>Login Form</legend>
       <div className={style.formGroup}>
       <label htmlFor='email'>email</label>
        <input type='email' placeholder='email' id='email' name='email' value={loginUser.email} onChange={loginHandle}/>
       </div>
       <div className={style.formGroup}>
       <label htmlFor='password'>password</label>
        <input type='password' placeholder='password' id='password' name='password' value={loginUser.password} onChange={loginHandle}/>
       </div>
       <div className={style.formGroup}>
        <button onClick={handleSubmit}>Login</button>
       </div>
    </form>
    </Fragment>
  );
};

export default Login