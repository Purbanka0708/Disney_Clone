import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <div className='h-screen w-full bg-black'>
      <Header/>
      <Slider/>
    </div>
    
  )
}

export default App
