import React, { Component } from 'react'
import './Header.scss'
import Icon from '../images/h1.png'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={Icon}  alt=''/>

        <ul>
            <li><a href="https://">Collection</a></li>
            <li><a href="https://">Content</a></li>
            <li><a href="https://">Roadmap</a></li>
            <li><a href="https://">Team</a></li>
        <button>OpenSea</button>
        </ul>
      </div>
    )
  }
}
