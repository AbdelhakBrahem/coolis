import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/authActions";

function Register({ history }) {
  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.isAuth) {
      history.push("/feed");
    }
  }, [auth.isAuth]);
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const registerNow = (e) => {
    e.preventDefault();
    dispatch(registerUser(info));
  };
  const [errors, setErrors] = useState(null);

  return (
    <div className="container register">
      
        <div className="col">
          <form onSubmit={registerNow}>
            <div>
              <div>
                <label for="firstname" className="newline">Firstname</label>
                <input type="text" name="firstname" onChange={handleChange}  placeholder="Firstname"/>
              </div>
              <div>
                <label className="newline">Lastname</label>
                <input type="text" name="lastname" onChange={handleChange} placeholder="Lastname"/>
              </div>
              <div>
                <label className="newline">Phone</label>
                <input type="text" name="phone" onChange={handleChange} placeholder="Phone"/>
              </div>
              <div>
                <label className="newline">Email</label>
                <input type="text" name="email" onChange={handleChange} placeholder="Email"/>
              </div>
              <div>
                <label className="newline">Password</label>
                <input type="password" name="password" onChange={handleChange} placeholder="Password"/>
              </div>
            </div>
            {auth.error && auth.error.map((el) => <h1>{el.msg}</h1>)}
            <button>Register</button>
          </form>
        </div>
    </div>
  );
}

export default Register;
