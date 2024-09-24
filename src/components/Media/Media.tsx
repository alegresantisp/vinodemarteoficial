import React from 'react';
import AlbumGrid from '../Grid/AlbumGrid';

export function Media() {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://res.cloudinary.com/dhli2ym3v/video/upload/v1727208824/uhd_30fps_xwiazp.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Componente AlbumGrid */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <AlbumGrid />

        {/* Video de YouTube */}
        <div className="mt-8 w-[80%] max-w-md mb-10 px-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Mira este video:</h2>
          <div className="relative w-full h-0 pb-[56.25%] sm:pb-[42.1875%] md:pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full sm:w-2/4 sm:h-2/4 sm:left-1/2 sm:-translate-x-1/2 md:w-full md:h-full md:left-0 md:translate-x-0"
              src="https://www.youtube.com/embed/_KyNFoBkGPs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;

