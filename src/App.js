import React from 'react'
import './App.css'
import Foto from './components/Imagen/Foto'
import BuenosDias from './components/Welcome/BuenosDias/BuenosDias'
import Welcome from './components/Welcome/Welcome'


const App= () => {
  return (
   
   <div>
     <BuenosDias/>
     <Welcome name="sofi"/>
     <Foto url="https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_960_720.jpg"/>
     <Welcome name= "alexander"/>
     <Foto url="https://media.istockphoto.com/photos/small-brown-kitten-picture-id1272969516"/>
     <Welcome name= "stiven"/>
     <Foto url="https://cdn.pixabay.com/photo/2019/06/05/08/37/dog-4253238_960_720.jpg"/>
     
      </div>
  )
}

export default App
