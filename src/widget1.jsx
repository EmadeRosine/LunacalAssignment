import React, { useState } from 'react';

const Widget1 = () => {
  const [activeButton, setActiveButton] = useState('About Us');

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="bg-gray-600 h-1/2 p-3 mb-2 rounded-lg flex">
      <div className='mr-3'>
        <i className="fa-regular fa-circle-question mb-10 text-gray-300"></i>
        <i className="fa-solid fa-grip-vertical mt-10 text-gray-400"></i>
      </div>
      <div>
        <nav className='flex justify-between items-center h-13 text-white bg-black rounded-lg px-2'>
          <button
            className={`px-5 py-2 my-1 rounded-lg shadow-lg ${activeButton === 'About Us' ? 'bg-gray-600 shadow-2xl' : ''}`}
            onClick={() => handleClick('About Us')}
            style={activeButton === 'About Us' ? { boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.8)' } : {}}
          >
            About Us
          </button>
          <button
            className={`px-5 py-2 my-1 rounded-lg shadow-lg ${activeButton === 'Experience' ? 'bg-gray-600 shadow-2xl' : ''}`}
            onClick={() => handleClick('Experience')}
            style={activeButton === 'Experience' ? { boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.8)' } : {}}
          >
            Experience
          </button>
          <button
            className={`px-5 py-2 my-1 rounded-lg shadow-lg ${activeButton === 'Recommended' ? 'bg-gray-600 shadow-2xl' : ''}`}
            onClick={() => handleClick('Recommended')}
            style={activeButton === 'Recommended' ? { boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.8)' } : {}}
          >
            Recommended
          </button>
        </nav>
        <div>
          <p className='text-white mt-4'>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
          </p>
          <p className='text-white mt-3'>
            I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
          </p>
        </div>
      </div>
      <div className='w-6 bg-gray-300 h-10 mt-12 ml-3 rounded-full'></div>
    </div>
  );
};

export default Widget1;
