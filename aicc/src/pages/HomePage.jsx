import React from 'react'
import {GlobeDemo} from '../components/GlobeDemo'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  const handleSubmit = ()=>{
    navigate('/register')
  }
  return (
    <div className="flex flex-col justify-center hello items-center bg-black text-white pt-10">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-500 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent mb-6">
        AICC - GHRCEM
      </span>
      <p className="text-center text-xl font-light mb-8">
        The official coding club of GHRCEM Pune
      </p>
      <button onClick={handleSubmit} className="bg-white text-black font-bold py-2 px-6 rounded mb-10">
        Join AICC
      </button>
      <GlobeDemo />
    </div>
  )
}

export default HomePage