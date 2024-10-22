import React, { Fragment, useState } from "react";
import style from "./register.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let [registerUser, setregisterUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate()

  let handleRegister = (e) => {
    let { name, value } = e.target;
    setregisterUser({ ...registerUser, [name]: value });
  };

  let registerSubmit = (e) => {
    e.preventDefault();
    console.log(registerUser);
    if (registerUser.email.trim() !== "") {
      axios.post("http://localhost:5000/users", registerUser).then(() => {
        toast.success("registered");
        setregisterUser({ username: "", email: "", password: "" });
        navigate("/login")
      });
    } else {
      console.log("empty input");
    }
  };
  return (
    <Fragment>
      <form id={style.form}>
        <div className={style.formGroup}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            placeholder="username"
            id="username"
            name="username"
            value={registerUser.username}
            onChange={handleRegister}
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="email">email</label>
          <input
            type="text"
            placeholder="email"
            id="email"
            name="email"
            value={registerUser.email}
            onChange={handleRegister}
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="password">password</label>
          <input
            type="text"
            placeholder="password"
            id="password"
            name="password"
            value={registerUser.password}
            onChange={handleRegister}
          />
        </div>

        <div className={style.formGroup}>
          <button onClick={registerSubmit}>register</button>
        </div>
      </form>
    </Fragment>
  );
};

export default Register;
