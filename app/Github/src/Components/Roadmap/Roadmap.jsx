import React from 'react'
import Block from './Block/Block'
import './Roadmap.scss'

import B1 from '../images/r1.png'
import B2 from '../images/r2.png'
import B4 from '../images/r4.png'
import B6 from '../images/r6.png'

const Roadmap = () => {
  return (
    <div className="roadmap">
        <h5>Releases</h5>
        <h2>Our Roadmap</h2>

        <Block rasm={B1} foiz="0%" h3="Q1 2022" h2="Community DAO"/>
        <Block foiz="20%" h3="Q2 2022" h2="Opening Event" big={B2}/>
        <Block foiz="40%" h3="Q3 2022" h2="Charity Donation"/>
        <Block foiz="60%" h3="Q4 2022" h2="Rare Giveaways" big={B4}/>
        <Block foiz="80%" h3="Q1 2023" h2="New Nfts" />
        <Block foiz="100%" h3="Q2 2023" h2="Metaverse" big={B6}/>
    </div>
  )
}

export default Roadmap