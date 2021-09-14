import React from 'react'
import Business from "../image/business.png";


function Money() {
    return (
        <div className="container">
            <div className="money">
          <div className="textBox">
            <div>
              <h1>Rentabilisé votre voyage</h1>
              <p>
                {" "}
                A l'aide de <span style={{ fontWeight: 700 }}>Coolis</span> vous
                pouvez gagner de l'argent en livrant les colis de certains
                personnes. Nous vous donnons les outils dont vous avez besoin
                pour vous mettre en contact avec l'expéditeur et nous
                garantissons un paiement en ligne rapide et sécurisé.{" "}
              </p>
              <button>Découvrir</button>
            </div>
          </div>
          <div className="photoBox">
            <img src={Business} alt="" />
          </div>
        </div>
        </div>
    )
}

export default Money
