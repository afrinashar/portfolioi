import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Youtube from '@iconscout/react-unicons/icons/uil-youtube'
import Wave from '../../img/wave.png'

const Footer = () => {
  return (
    <div className="Footer">
      <img src={Wave} alt=""  style={{width: '100%'}}/>
      <div className="f-content">
        <span>ananddeva345@gmail.com</span>
        <div className="f-icons">
          <Insta color='white' size='3rem'/>
          <Facebook color='white' size='3rem'/>
          <Youtube color='white' size='3rem'/>
        </div>
      </div>
    </div>
  )
}

export default Footer