import React from 'react'
import './Text.scss'

const Text = (props) => {
  return (
    <div className="collection__block__texts__text">
        <h3>{props.header}</h3>
        <p>Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio in tellus risus.</p>
      </div>
  )
}

export default Text