import React, { useState, useEffect } from "react";
import { loginUser } from "../actions/authActions";
import { useDispatch, useSelector } from "react-redux";

function Login({ history }) {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const login = (e) => {
    e.preventDefault();
    dispatch(loginUser(info));
  };
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const auth = useSelector((state) => state.auth);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    if (auth.isAuth) {
      history.push("/feed");
    }
    if (auth.error) {
      setErrors(auth.error);
    }
  }, [auth.isAuth, auth.error]);

  return (
    <div  className="container login">
      <div className="col">
        <form onSubmit={login}>
          <div>
            <label className="newline" placeholder="Email">Email</label>
            <input type="text" name="email" onChange={handleChange} />
          </div>
          <div>
            <label className="newline" placeholder="Password">Password</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          {errors && errors.map((el) => <h1>{el.msg}</h1>)}
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
