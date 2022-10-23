import React from "react";
import "./Rarity.scss";
import User from "./User/User";

import {users} from "../Api";

const Rarity = () => {
  return (
    <div className="rarity">
      <div className="rarity__header">
        <h5>Rarity</h5>
        <h2>Exclusive Content</h2>
      </div>

      {users.map((user) => {
        return (
          <User
          key={user.id}
            user_img={user.avatar}
            level_img={user.level}
            h3={user.h3}
            h5={user.h5}
          />
        );
      })}
    </div>
  );
};

export default Rarity;
