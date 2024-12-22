import React from 'react'
import './topicBox.css'

export default function TopicBox(props) {
  return (
    <div>
      <div className="topicBox">
        <span className='text'>My Favourite food is {props.food} the price is {props.price}</span>
      </div>
    </div>
  )
}
