import React from 'react'
import Paris from "../image/paris.jpg";
import London from "../image/london.jpg";
import Berlin from "../image/berline.jpg";
import NewYork from "../image/newyork.jpg";
import { Link } from 'react-router-dom'


function Cards() {
  return (
    <div>
      <div className="slide">
        <h1 className="slideTitle">Choisi votre distination</h1>
        <div className="cards container">
          <Link to={{
            pathname: "/feed",
            search: 'Paris'
          }} ><div
            className="cardBox"
            style={{
              backgroundImage: `url(${Paris})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
              <h1>Paris</h1>
            </div></Link>


          <div
            className="cardBox"
            style={{
              backgroundImage: `url(${London})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1>London</h1>
          </div>
          <div
            className="cardBox"
            style={{
              backgroundImage: `url(${Berlin})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1>Berlin</h1>
          </div>
          <div
            className="cardBox"
            style={{
              backgroundImage: `url(${NewYork})`,
              backgroundSize: "cover",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1>New York</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
