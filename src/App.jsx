import { useState } from 'react'
import DrumPads from './DrumPads'


import './App.css'

function App() {
  

  return (
   <div>
    <div id="drum-machine">
    <h1>Drum Machine by Vierre</h1>
      <div id="mainPad">
      <div className="pad-bank">
      <DrumPads/>
      </div>
      </div>
      
    </div>
    </div>
  )
}

export default App
