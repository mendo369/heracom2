import React from "react";

import Plan from "./Plan";

import './style.css'

function ListOfPlans({ plans }) {
  return (
    <section className="plans">
      {plans.map((plan) => (
        <Plan plan={plan} key={plan.Name} />
      ))}
    </section>
  );
}

export default ListOfPlans;
