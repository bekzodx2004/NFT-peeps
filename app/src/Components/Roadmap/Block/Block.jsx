import React from 'react'
import './Block.scss'
import Red from '../../images/crcl_red.png'
const Block = (props) => {
  return (
   <div className="roadmap__block">
    <h3><img src={Red}alt="" />{props.foiz}</h3>

    <div className="roadmap__block__text">
        <h3>{props.h3}</h3>
        <h2>{props.h2}</h2>
        <p>Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus posuere turpis commodo leo ipsum magnis.</p>
        <img src={props.rasm} alt="" className="rasm" />
    </div>

    <img src={props.big} alt="" />
   </div>
  )
}

export default Block