import React, { useState } from 'react';

const Widget2 = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleShiftLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleShiftRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="bg-gray-600 h-1/2 p-3 my-2 rounded-lg flex">
      <div className='mr-3'>
        <i className="fa-regular fa-circle-question mb-10 text-gray-300"></i>
        <i className="fa-solid fa-grip-vertical mt-10 text-gray-400"></i>
      </div>
      <div>
        <nav className='flex justify-between h-12 text-white px-2'>
          <button className='px-5 py-2 my-1 rounded-lg shadow-lg bg-gray-800 font-bold '>Gallery</button>
          <div>
            <input
              type="file"
              accept="image/*"
              id="image-upload"
              style={{ display: 'none' }}
              onChange={handleAddImage}
            />
            <label htmlFor="image-upload" className='rounded-full bg-gray-700 py-2 px-4 mx-3 cursor-pointer shadow-lg'>
              + ADD IMAGE
            </label>
            <i
              className="fa-solid fa-arrow-left p-2 bg-gray-700 rounded-full mx-3 cursor-pointer shadow-lg"
              onClick={handleShiftLeft}
            ></i>
            <i
              className="fa-solid fa-arrow-right p-2 bg-gray-700 rounded-full mx-3 cursor-pointer shadow-lg"
              onClick={handleShiftRight}
            ></i>
          </div> 
        </nav>
        <div className='mt-5 grid grid-cols-3 gap-3'>
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} className='w-40 h-40 rounded-lg mx-2 shadow-lg' />
          ))}
        </div>
      </div>
      <div className='w-15 ml-3'></div>
    </div>
  );
};

export default Widget2;
