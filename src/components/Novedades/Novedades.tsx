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
                    { opacity: 0.5, y: 50 }, 
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

    const setSectionRef = (index: number) => (element: HTMLDivElement | null) => {
        sectionRefs.current[index] = element;
    };

    return (
        <div ref={novedadesRef} className="novedades-section w-full bg-gradient-to-b from-gray-800 to-gray-900 py-16 px-8">
            <h2 className="text-5xl font-serif text-white text-center mb-12">NOVEDADES</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div ref={setSectionRef(0)} className="bg-white p-6 shadow-lg">
                    <h3 className="text-3xl font-bold mb-4">Próximas Fechas</h3>
                    <ul className="list-disc ml-5">
                        <li>29 Nov - CCSI</li>
                    </ul>
                    <a
                        href="https://www.passline.com/eventos/vino-de-marte-en-el-ccsi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-6 py-2 text-white bg-gradient-to-r from-gray-800 via-purple-700 to-gray-800 hover:from-gray-700 hover:via-purple-600 hover:to-gray-700 font-bold rounded"
                    >
                        Compr&aacute; tu entrada
                    </a>
                </div>

                <div ref={setSectionRef(1)} className="bg-white p-6 shadow-lg">
                    <h3 className="text-3xl font-bold mb-4">Próximos Discos</h3>
                    <Image src={calleSensa} alt="Próximo Disco" width={300} height={300} className="mb-4" />
                    <p className="text-gray-700">Nuestro próximo álbum estará disponible en breves. ¡No te lo pierdas!</p>
                </div>

                <div ref={setSectionRef(2)} className="bg-white p-6 shadow-lg">
                    <h3 className="text-3xl font-bold mb-4">Historia de la Banda</h3>
                    <p className="text-gray-700">
                        Vino de Marte es una banda apasionada por el rock, formada por Federico Hahner | baterista,
                        Bautista Pozzo | guitarrista y Santiago Alegre | voz y bajo. Han dejado su huella en escenarios
                        como Trastienda, Makena, City Bar y otros lugares emblemáticos. Con un EP, un show en vivo en 
                        Trastienda y varios singles, anticipan el lanzamiento de su próximo disco, &quot;Calle Sensaci&oacute;n&quot;. 
                        La banda se destaca por componer sus propias canciones, utilizando el rock como medio para 
                        expresar sus pensamientos y emociones.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Novedades;
