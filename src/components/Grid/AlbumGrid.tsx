'use client';
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
    <div className="relative w-full flex items-center justify-center overflow-hidden rounded-lg mt-10">
      <button
        onClick={handlePrev}
        className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-black absolute left-10 z-10"
      >
        <FaArrowLeft size={20} />
      </button>

      <div className="flex w-full justify-center overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {songs.map((song, index) => (
            <div
              key={song.id}
              className={`flex flex-col items-center transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
              style={{ minWidth: '100%' }} // Asegura que cada elemento ocupe el 100% del contenedor
            >
              <Image
                src={song.imgSrc}
                alt={`Imagen Disco ${index + 1}`}
                width={200}
                height={200}
                className="object-cover rounded-lg"
              />
              <div className="flex justify-center mt-2">
                <button
                  onClick={handlePlayPause}
                  className="bg-black bg-opacity-50 text-white p-3 rounded-full"
                >
                  {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-black absolute right-10 z-10"
      >
        <FaArrowRight size={20} />
      </button>

      <audio ref={audioRef} src={songs[currentIndex].audioSrc} />
    </div>
  );
};

export default AlbumGrid;


