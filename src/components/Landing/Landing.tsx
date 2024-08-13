'use client'

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import foto1 from '../../../public/assets/foto4.jpeg';
import foto2 from '../../../public/assets/foto1.jpeg';
import foto3 from '../../../public/assets/foto3.jpeg';
import NavBar from '../NavBar/NavBar'; 
import AlbumGrid from '../Grid/AlbumGrid';
import Footer from '../Footer/Footer';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);
    const navBarRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section1 = section1Ref.current;
        const section2 = section2Ref.current;
        const section3 = section3Ref.current;
        const navBar = navBarRef.current;
        const text = textRef.current;

        if (section1) {
            gsap.fromTo(
                section1,
                { opacity: 1 },
                {
                    opacity: 0.7,
                    scrollTrigger: {
                        trigger: section1,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    }
                }
            );
        }

        if (section2) {
            gsap.fromTo(
                section2,
                { opacity: 0.7 },
                {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: section2,
                        start: 'top bottom',
                        end: 'bottom bottom',
                        scrub: true,
                    }
                }
            );
        }

        if (navBar) {
            gsap.fromTo(
                navBar,
                { opacity: 0 },
                {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: section2,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: true,
                    }
                }
            );
        }

        if (text) {
            gsap.fromTo(
                text,
                { opacity: 0 },
                {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: section2,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: true,
                    }
                }
            );
        }

        if (section3) {
            gsap.fromTo(
                section3,
                { opacity: 0.9, x: 100 }, 
                {
                    opacity: 1, 
                    x: 0, 
                    scrollTrigger: {
                        trigger: section3,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: true,
                    }
                }
            );
        }
    }, []);

    return (
        <div className="w-full">
            <div ref={section1Ref} className="relative w-full h-screen flex items-center justify-center bg-black">
                <Image
                    src={foto1}
                    alt="Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="filter brightness-75" 
                />
                <h1 className="title absolute inset-0 flex items-center justify-center text-white text-5xl md:text-7xl font-bold">
                    VINO DE MARTE
                </h1>
            </div>

            <div ref={section2Ref} className="relative w-full h-screen flex items-center justify-center bg-black text-white">
                <Image
                    src={foto2}
                    alt="Second Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="filter brightness-75"
                />
                <div ref={navBarRef} className="absolute top-10 right-10 z-10">
                    <NavBar /> 
                </div>
                <div ref={textRef} className="absolute bottom-4 left-4 p-4 z-20">
                    <h2 className="text-2xl md:text-4xl font-semibold">
                        Que sea Rock
                    </h2>
                </div>
            </div>

            <div ref={section3Ref} className="relative w-full h-screen flex items-center justify-end bg-gray-800 overflow-hidden">
                <Image
                    src={foto3}
                    alt="New Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="filter brightness-75"
                />
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center">
                    <div className="relative w-[300px] h-[300px]">
                        <AlbumGrid />
                    </div>
                </div>
            </div>

            <Footer /> 
        </div>
    );
};

export default LandingPage;

