'use client';

import Image from 'next/image';
import foto2 from '../../../public/assets/foto1.jpeg';
import NavBar from '../NavBar/NavBar'; 
import Footer from '../Footer/Footer';
import Novedades from '../Novedades/Novedades';
import Media from '../Media/Media';
import { useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa'; 

const LandingPage = () => {
    // Referencia para la siguiente sección
    const mediaRef = useRef<HTMLDivElement>(null);

    // Función para desplazarse a la sección Media
    const scrollToMedia = () => {
        if (mediaRef.current) {
            mediaRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full">
            <div className="relative w-full h-screen flex items-center justify-center bg-black">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="https://res.cloudinary.com/dhli2ym3v/video/upload/v1727205552/8474614-hd_1080_1920_30fps_myfkxv.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>

                {/* Texto en el frente */}
                <h1 className="relative text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold poppins">
                    VINO DE MARTE
                </h1>

                {/* Flecha hacia abajo */}
                <div className="absolute bottom-10 cursor-pointer" onClick={scrollToMedia}>
                    <FaChevronDown className="w-8 h-8 text-white hover:text-gray-300 transition" />
                </div>
            </div>

            <div ref={mediaRef} className="relative w-full h-screen flex items-center justify-center bg-black text-white">
                <Image
                    src={foto2}
                    alt="Second Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="filter brightness-75"
                />
                <div className="absolute top-10 right-10 z-10">
                    <NavBar />
                </div>
                <div className="absolute bottom-4 left-4 p-4 z-20">
                    <h2 className="text-2xl md:text-4xl font-semibold">
                        Que sea Rock
                    </h2>
                </div>
            </div>

            <Media />
          

            <Novedades /> 
            <Footer /> 
        </div>
    );
};

export default LandingPage;

