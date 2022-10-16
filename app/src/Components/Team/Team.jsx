import React from "react";

import "./Team.scss";
import Member from "./Member/Member";

import Mot1 from "../images/mot1.png";
import Mot2 from "../images/mot2.png";
import Mot3 from "../images/mot3.png";
import Mot4 from "../images/mot4.png";
import Mot5 from "../images/mot5.png";
import Mot6 from "../images/mot6.png";

import Red from '../images/crcl_red.png'

const Team = () => {
  return (
    <div className="team">
        <h5><img src={Red} alt="" /> Team</h5>
        <h2>Meet Our Team</h2>
      <div>
        <Member img={Mot1} h5={"CEO"} h3={"Jennifer"} />
        <Member img={Mot2} h5={"Developer"} h3={"Matthew"} />
        <Member img={Mot3} h5={"Developer"} h3={"John"} />
        <Member img={Mot4} h5={"Designer"} h3={"Justin"} />
        <Member img={Mot5} h5={"Designer"} h3={"Jessica"} />
        <Member img={Mot6} h5={"Designer"} h3={"Katty"} />
      </div>
    </div>
  );
};

export default Team;
