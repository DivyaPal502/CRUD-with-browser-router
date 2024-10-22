import React, { Fragment, useEffect, useState } from "react";
import style from "../register/register.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
const EditUser = () => {
  let [registeredUser, setRegisteredUser] = useState(null);

  let navigate = useNavigate()

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}`).then(({ data }) => {
      console.log(data);
      setRegisteredUser(data);
    });
  }, []);

  function handleEdit(e) {
    let { name, value } = e.target;
    setRegisteredUser({ ...registeredUser, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(registeredUser);
    axios.put(`http://localhost:5000/users/${id}`, registeredUser).then(() => {
      console.log("data updated");
      toast.success("user updated")
      navigate("/allusers")
    });
  }

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
            value={registeredUser?.username}
            onChange={handleEdit}
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="email">email</label>
          <input
            type="text"
            placeholder="email"
            id="email"
            name="email"
            value={registeredUser?.email}
            onChange={handleEdit}
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="password">password</label>
          <input
            type="text"
            placeholder="password"
            id="password"
            name="password"
            value={registeredUser?.password}
            onChange={handleEdit}
          />
        </div>

        <div className={style.formGroup}>
          <button onClick={handleSubmit}>Update</button>
        </div>
      </form>
    </Fragment>
  );
};

export default EditUser;
