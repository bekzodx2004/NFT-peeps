import React from 'react'
import './Member.scss'
const Member = ({img , h5 , h3}) => {
  return (
    <div className="team__member">
        <img src={img} alt="" />
        <h5>{h5}</h5>
        <h3>{h3}</h3>
    </div>
  )
}

export default Member