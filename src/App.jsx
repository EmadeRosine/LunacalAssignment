import React from 'react'
import './index.css'
import Widget1 from './widget1.jsx'
import Widget2 from './widget2.jsx'

function App() {

  return (
    <div className="h-screen flex bg-gray-800 p-10">
    {/* Left side - empty */}
    <div className="w-1/2 bg-gray-500 rounded-lg "></div>

    {/* Right side - widgets */}
    <div className="w-1/2 bg-gray-800 mx-6">
      <Widget1 />
      <hr className='h-1 bg-gray-400 rounded-full mx-8' />

      <Widget2/>
      <hr className='h-1 bg-gray-400 rounded-full mx-8' />
    </div>
  </div>
  )
}

export default App
