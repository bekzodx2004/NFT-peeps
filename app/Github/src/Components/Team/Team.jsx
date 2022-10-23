import React from "react";

import "./Team.scss";
import Member from "./Member/Member";
import { team } from "../Api";

const Team = () => {
  return (
    <div className="team">
      <h5>Team</h5>
      <h2>Meet Our Team</h2>
      <div>
        {team.map((azo) => {
          return <Member key={azo.id} img={azo.img} h5={azo.h5} h3={azo.h3} />;
        })}
      </div>
    </div>
  );
};

export default Team;
