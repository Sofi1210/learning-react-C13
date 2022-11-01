import React from 'react'
import './Foto.css'

const Foto = (props) => {
  return (
    <div>
      <img className='imagen' src={props.url} alt=''/>
    </div>
  )
}

export default Foto
