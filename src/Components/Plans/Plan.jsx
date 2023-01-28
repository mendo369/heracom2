import React from "react";

import ImgPrueba from "../../Assets/878719.png"

function Plan({ plan }) {
  return (
    <div className="plan">
      <div className="info">
        <div className="plan-title">
          <h3>
          {plan.Name}
          </h3>
        </div>
        <div className="plan-desscription">
          <p>
            {plan.Description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem at nobis aut iure quaerat dolorum beatae, blanditiis esse adipisci quia maiores. Consequatur impedit quo soluta doloribus autem commodi expedita? Quo.
          </p>
        </div>
        </div>
      <div className="image">
        <img src={ImgPrueba} alt="image" />
      </div>
    </div>
  );
}

export default Plan;
