import React from 'react'
import './Header.css'
//Images
import Logo from '../../Assets/Img/Heracom.png'
import waveBack from '../../Assets/Img/wave-back.png'
import waveFront from '../../Assets/Img/wave-front.png'

export default function Header() {
  return (
    // <div>
        <div className="header">
            <img className="bg-heracom" src={Logo} alt="Logo Heracom"/>
            <div className="waves">
                <img className="wave-back" src={waveBack} alt="wave-back"/>
                <img className="wave-front" src={waveFront} alt="wave-front"/>
            </div>
           
        </div>
      
    // </div>
  )
}
