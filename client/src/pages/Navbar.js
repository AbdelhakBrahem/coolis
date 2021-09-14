import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/authActions";
import Logo from "../image/coolis.svg"

function Navbar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <Link to="/"> <img className="logo" src={Logo} alt="" /></Link>
      <div className="nav">
      {/* <Link to="/">Home</Link> */}
      {auth.isAuth ? (
        <>
          <Link to="/profil">Profil</Link>
          <Link onClick={() => dispatch(logoutUser())}>Logout</Link>
          <Link to="/feed">Feed</Link>

        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
      </div>  
    </div>
  );
}

export default Navbar;
