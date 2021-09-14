import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../actions/authActions";
import { getPosts } from "../actions/postAction";
import AddPost from "./AddPost";
import PostList from "./PostList";
import Modal from 'react-modal'
import Paper from "../image/send.svg"
import Search from "./Search";
// import moment from "moment"
import { useLocation } from "react-router-dom";


function Feed() {
  const location = useLocation()
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const auth = useSelector(state => state.auth);
  const posts = useSelector(state => state.post.posts)
  console.log(posts)
  const [volume, setVolume] = useState("")
  const [departure, setDeparture] = useState("")
  const [destination, setDestination] = useState(location.search.replace('?', ''))
  const [date, setDate] = useState("")

  useEffect(() => {
    console.log('hello')
    dispatch(getPosts())
    dispatch(loadUser())

  }, [])
  const handleFilterChange = () => {
    const vol = volume || 0
    if (!date)
      return posts.filter(elm => elm.destination.toUpperCase().trim().includes(destination.toUpperCase().trim()) &&
        elm.departure.toUpperCase().trim().includes(departure.toUpperCase().trim()) &&
        elm.volume >= volume)
    else
      return posts.filter(elm => elm.destination.toUpperCase().trim().includes(destination.toUpperCase().trim()) &&
        elm.departure.toUpperCase().trim().includes(departure.toUpperCase().trim()) &&
        elm.volume >= volume /* && moment(elm.date).isSame(moment(date)) */)
  }
  return (
    <div className="container feeds">

      <div className="postBanner">
        <div style={{ width: "70%" }}>
          {auth.user && <p>Hello {auth.user.firstname} </p>}
          <h1>Ajouter une poste</h1>
          <button className="btn-addPost" onClick={() => setModalIsOpen(true)}>  <img src={Paper} style={{ width: "20px" }} alt="" /> Ajouter</button>
        </div>
        <div className="postSearchComp">
          <Search destination={destination} setVolume={setVolume} setDate={setDate} setDeparture={setDeparture} setDestination={setDestination} />
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="postWin">
        <AddPost></AddPost>
        {/* <button onClick={()=>setModalIsOpen(false)}>Cancel</button> */}
      </Modal>
      <PostList posts={handleFilterChange()} />
    </div>
  );
}

export default Feed;
