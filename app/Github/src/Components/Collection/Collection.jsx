import React, { Component } from "react";
import "./Collection.scss";
import Text from "./Text/Text";
import Peeps from "../images/peeps.png";
export default class Collection extends Component {
  render() {
    return (
      <div className="collection">
        <h5>Collection</h5>
        <h2>Meet Our Bored Peeps!</h2>
        <div className="collection__block">
          <div className="collection__block__texts">
            <Text header="6500 Bored Peeps" />
            <Text header="Mint Price & Date" />
            <Text header="Why Bored Peeps" />
          </div>
          <img src={Peeps} alt="" />
        </div>
      </div>
    );
  }
}
