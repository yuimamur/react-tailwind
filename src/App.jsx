import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './weather'


function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
    <Weather />
    </div>
  );
}

export default App
