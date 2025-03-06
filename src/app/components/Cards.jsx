import React from 'react'

function Cards({ title, description, className }) {
  return (
    // <div className={`bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-start ${className}`}>
    <div className={`p-6 rounded-lg shadow-md text-center flex flex-col justify-start ${className ? className : 'bg-white'}`}>
      <h2 className="text-2xl font-semibold text-[#434141] mb-8">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
    
  )
}

export default Cards
