import React, { Component } from "react";
import "./Top.scss";

import Tosh from "../images/crcl_yellow.png";
export default class Top extends Component {
  render() {
    return (
      <div className="top">
        
          {/* <img src={T1} alt="" /> */}
        
        <div className="top__text">
          <h5>
            <img src={Tosh} alt="" /> NFT Collection
          </h5>
          <h1>Bored NFT Peeps</h1>
          <p>
            Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh amet
            proin in tristique. Ipsum morbi adipiscing faucibus eu odio in
            tellus risus.
          </p>
          <button>OpenSea</button>
        </div>

        {/* <img src={T2} alt="" /> */}

      </div>
    );
  }
}
