'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import calleSensa from '../../../public/assets/CALLE.jpeg';

gsap.registerPlugin(ScrollTrigger);

const Novedades: React.FC = () => {
    const novedadesRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const sections = sectionRefs.current;

        sections.forEach((section) => {
            if (section) {
                gsap.fromTo(section,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                            scrub: 1,
                        }
                    }
                );
            }
        });
    }, []);

    // Callback ref function that correctly assigns the element to the array
    const setSectionRef = (index: number) => (element: HTMLDivElement | null) => {
        sectionRefs.current[index] = element;
    };

    return (
        <div ref={novedadesRef} className="novedades-section w-full bg-gray-100 py-16 px-8">
            <h2 className="text-5xl font-serif text-gray-900 text-center mb-12">NOVEDADES</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div ref={setSectionRef(0)} className="bg-white p-6 shadow-lg">
                    <h3 className="text-3xl font-bold mb-4">Próximas Fechas</h3>
                    <ul className="list-disc ml-5">
                        <li>06 Sept - Niceto Bar </li>
                       
                    </ul>
                </div>

                <div ref={setSectionRef(1)} className="bg-white p-6 shadow-lg">
                    <h3 className="text-3xl font-bold mb-4">Próximos Discos</h3>
                    <Image src={calleSensa} alt="Próximo Disco" width={300} height={300} className="mb-4" />
                    <p className="text-gray-700">Nuestro próximo álbum estará disponible en breves. ¡No te lo pierdas!</p>
                </div>

                <div ref={setSectionRef(2)} className="bg-white p-6 shadow-lg">
                    <h3 className="text-3xl font-bold mb-4">Historia de la Banda</h3>
                    <p className="text-gray-700">
                        ¡Mantente al día con las últimas novedades! 
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Novedades;
