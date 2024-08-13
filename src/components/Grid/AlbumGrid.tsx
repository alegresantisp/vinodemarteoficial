import React, { useState } from 'react';
import Image from 'next/image';
import { FaPlay, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const songs = [
  { id: 1, imgSrc: '/assets/BUENA.png' },
  { id: 2, imgSrc: '/assets/BUENA.png' },
  { id: 3, imgSrc: '/assets/BUENA.png' },
];

const AlbumGrid: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === songs.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div
      className="relative w-64 h-64 flex flex-col items-center justify-center overflow-hidden rounded-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={songs[currentIndex].imgSrc}
          alt='Imagen Disco'
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out transform"
        />
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <button className="bg-black bg-opacity-50 text-white p-3 rounded-full">
            <FaPlay size={30} />
          </button>
        </div>
      </div>
      <div className="absolute bottom-2 flex space-x-4">
        <button
          onClick={handlePrev}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-black"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-black"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default AlbumGrid;





