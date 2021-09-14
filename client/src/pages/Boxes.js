import React from 'react'
import Sign from "../image/signup.svg";
import Find from "../image/find.svg";
import Send from "../image/send-box.svg";

function Boxes() {
    return (
        <div className="container">
             <div className="thumbnail">
          <div className="row">
            <h1>Comment ça marche?</h1>
            <div className="boxes">
              <div className="box">
                <img src={Sign} alt="" />
                <p>
                  Connecter vous a notre plateform <span>Coolis</span>.{" "}
                </p>
              </div>
              <div className="box">
                <img src={Find} alt="" />
                <p>Trouvez l'annonce qui vous correspond.</p>
              </div>
              <div className="box">
                <img src={Send} style={{ marginRight: "10px" }} alt="" />
                <p>Envoyer votre colis en toute sécurité.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Boxes
