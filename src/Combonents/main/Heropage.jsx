import React, { useState, useEffect } from 'react';

function Heropage() {
  const images = [
    'src/assets/imj2.jpg',
    'src/assets/imj3.png',
    'src/assets/imj1.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full">
      <div className="carousel-container w-full">
        {/* Show one image at a time */}
        <div className="w-full h-auto flex justify-center items-center">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex}`}
            className="w-full h-auto object-cover" // Make image full width of the window
          />
        </div>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Heropage;
