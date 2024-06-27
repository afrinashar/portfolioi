import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({emoji, heading, detail,links}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <Link to={links} className=" btn c-button">LERAN MORE</Link>
    </div>
  )
}

export default Card
