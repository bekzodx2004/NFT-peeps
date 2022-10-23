import React from "react";
import './User.scss'

const User = (props) => {
  return (
    <div className="rarity__user">
      <div className="rarity__user__text">
        <h3>{props.h3}</h3>
        <div>
          <h5>{props.h5}</h5>
          <img src={props.level_img} alt="" />
        </div>
        <p>
          Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
          tincidunt diam integer amet, nec facilisis nec mi. Faucibus posuere
          turpis commodo leo ipsum magnis.
        </p>
      </div>

      <img src={props.user_img} alt="" />
    </div>
  );
};

export default User;
