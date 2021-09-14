import React from "react";

function PostCard({ post }) {
  return (
    <div className="postCard">
      <div className="volumePost">
        <div className="vol">
          <h4>Volume:</h4>
          <h1 style={{fontSize:"50px"}}>{post.volume} Kg</h1>
        </div>
      </div>
      <div className="postInfo">
        <div className="destination">
          <div className="target">
            <div className="departure">
              <h6>Départ:</h6>
              <h3>{post.departure}</h3>
            </div>
            <div className="arrival">
              <h6>Arrivée:</h6>
              <h3>{post.destination}</h3>
            </div>
          </div>

          <h6>{post.date}</h6>
        </div>
        <div className="description">
          <h6>{post.description}</h6>
        </div>
      </div>
      <button className="btn-post">Send</button>
    </div>
  );
}

export default PostCard;
