import React from 'react'
import './Question.scss'
const Question = ({savol}) => {
  return (
   <div className="faq__question">
    <p>{savol}</p>
    <i className='fa-solid fa-plus'></i>
   </div>
  )
}

export default Question