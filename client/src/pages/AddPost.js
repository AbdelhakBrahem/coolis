import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../actions/authActions";
import { addPost } from "../actions/postAction";


const AddPost = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.user) dispatch(loadUser());
  }, [dispatch, auth.user]);
  const [newpost, setNewpost] = useState({
    volume: "",
    description: "",
    departure:"",
    destination: "",
    date: "",
  });
  const handlechange = (e) => {
    setNewpost({
      ...newpost,
      [e.target.name]: e.target.value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ ...newpost, owner: auth.user._id }));
  };
  return (
    <div className="postform">

      <div className="col">
        <input type="number" name="volume" value={newpost.volume} placeholder="Volume" onChange={handlechange} />
        
        <input
          type="text"
          name="departure"
          value={newpost.departure}
          placeholder="Depart"
          onChange={handlechange}
        />
        <input
          type="text"
          name="destination"
          value={newpost.destination}
          placeholder="Destination"
          onChange={handlechange}
        />
        <input type="date" name="date" value={newpost.date} onChange={handlechange} className/>
        <input
          type="text"
          name="description"
          value={newpost.description}
          placeholder="Description"
          onChange={handlechange}
        />
        <button onClick={handlesubmit} onChange={handlechange}> Submit</button>
      </div>
        
    </div>
  );
};

export default AddPost;
