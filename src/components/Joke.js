import React from 'react'
import './Joke.css'

const Joke = (props) => {
  return (
    <li className="joke">
      <h2>{props.type}</h2>
      <h3>{props.setup}</h3>
      <h3>{props.punchline}</h3>
    </li>
  )
}

export default Joke
