import React from "react";
import "./Rarity.scss";
import User from "./User/User";

import U1 from '../images/c1.png'
import U2 from '../images/c2.png'
import U3 from '../images/c3.png'
import U4 from '../images/c4.png'
import U5 from '../images/c5.png'

import L1 from '../images/cc1.png'
import L2 from '../images/cc2.png'
import L3 from '../images/cc3.png'
import L4 from '../images/cc4.png'
import L5 from '../images/cc5.png'

const Rarity = () => {
  return (
    <div className="rarity">
      <div className="rarity__header">
        <h5>Rarity</h5>
        <h2>Exclusive Content</h2>
      </div>

      <User  user_img={U1} level_img={L1} h3="Common" h5="Tier 1" />
      <User  user_img={U2} level_img={L2} h3="Uncommon" h5="Tier 2" />
      <User  user_img={U3} level_img={L3} h3="Rare" h5="Tier 3" />
      <User  user_img={U4} level_img={L4} h3="Very Rare" h5="Tier 4" />
      <User  user_img={U5} level_img={L5} h3="Legendary" h5="Tier 5" />
    </div>
  );
};

export default Rarity;
