import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './Greet'
import Dogggie from './Dog'
import Die from './Die'
import DiceRoll from './DiceRoll'
import RandPoke from './RandPoke'
import Greeter from './Greeter'
import Pro from './Pro'

function App() {
  return(
  <>
{/* 
    <Greeter person="Lotusss" />
    <Greeter person="Smazzz" />
    <Greeter person="Amay" />
    <Greeter person="Secret" />
    <Greeter person="Bianca" /> */}


    <Pro numSides={20} />
    <Pro/> 
    <Pro numSides={12} />
    
  
  </>
  )

};
export default App;
