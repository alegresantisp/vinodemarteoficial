import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { FaPlay, FaPause, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const songs = [
  { id: 1, imgSrc: '/assets/GIRA.jpeg', audioSrc: '/assets/GIRA1.wav' },
  { id: 2, imgSrc: '/assets/QUEDATE.jpeg', audioSrc: '/assets/QUEDATE2.wav' },
  { id: 3, imgSrc: '/assets/SUCIOS.jpeg', audioSrc: '/assets/BILLETES.wav' },
];

const AlbumGrid: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === songs.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden rounded-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={songs[currentIndex].imgSrc}
          alt='Imagen Disco'
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 ease-in-out transform"
        />
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <button
            onClick={handlePlayPause}
            className="bg-black bg-opacity-50 text-white p-3 rounded-full"
          >
            {isPlaying ? <FaPause size={30} /> : <FaPlay size={30} />}
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
      <audio ref={audioRef} src={songs[currentIndex].audioSrc} />
    </div>
  );
};

export default AlbumGrid;



