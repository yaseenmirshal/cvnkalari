// app/page.js
"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import VerticalDots from '@/components/VerticalDots';
import MenuDots from '@/components/MenuDots/MenuDots';
import NavLinks from '@/components/NavLinks';
import style from '../styles/Home.module.scss';
export default function Home() {
    const [activePage, setActivePage] = useState(1);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            // Get the positions of each section
            const section1Position = section1Ref.current.offsetTop;
            const section2Position = section2Ref.current.offsetTop;
            const section3Position = section3Ref.current.offsetTop;
            const section4Position = section4Ref.current.offsetTop;
            const section5Position = section5Ref.current.offsetTop;
            const section6Position = section6Ref.current.offsetTop;


            if (scrollPosition < section2Position) {
                setActivePage(1);
            } else if (scrollPosition < section3Position) {
                setActivePage(2);
            } else if (scrollPosition < section4Position) {
                setActivePage(3);
            } else if (scrollPosition < section5Position) {
                setActivePage(4);
            } else if (scrollPosition < section6Position) {
                setActivePage(5);
            } else {
                setActivePage(6);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigateTo = (pageNumber) => {
        setActivePage(pageNumber);

        // Scroll to the appropriate section
        if (pageNumber === 1) {
            section1Ref.current.scrollIntoView({ behavior: 'smooth' });
        } else if (pageNumber === 2) {
            section2Ref.current.scrollIntoView({ behavior: 'smooth' });
        } else if (pageNumber === 3) {
            section3Ref.current.scrollIntoView({ behavior: 'smooth' });
        } else if (pageNumber === 4) {
            section4Ref.current.scrollIntoView({ behavior: 'smooth' });
        } else if (pageNumber === 5) {
            section5Ref.current.scrollIntoView({ behavior: 'smooth' });
        } else if (pageNumber === 6) {
            section6Ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const startPage = activePage <= 3 ? 1 : 4;





    return (
        <div className="min-h-screen bg-white">
            <header className="py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-white z-10 ">
                <MenuDots />
                <NavLinks />
            </header>
            <VerticalDots
                totalSections={6}
                activeSection={activePage}
                onDotClick={navigateTo}
            />
            <main className="px-6 md:px-12 py-8">
                {/* Section 1 */}
                <section ref={section1Ref} className="min-h-screen flex flex-col items-center justify-center">
                    <div className="relative mb-6">
                        <div className={style.kalariLogo}>
                            <Image
                                src='/images/CVN-UK-5-01.png'
                                alt="CVN Kalari UK Logo"
                                fill

                                className="rounded-full bg-blue-50"
                            />
                        </div>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-serif mb-8">Kalaripayattu</h1>
                </section>

                {/* Section 2 */}
                <section ref={section2Ref} className="min-h-screen flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="md:w-1/2">
                        <Image
                            src='/images/DSC_2020.JPG'
                            alt="Kalaripayattu practitioners"
                            width={600}
                            height={400}
                            className="rounded"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-serif mb-4">Welcome to CVN Kalari UK</h2>
                        <p className="mb-4">
                            Step into a world where the echoes of an ancient legacy inspire the minds
                            of today. At CVN Kalari UK, we proudly teach Kalaripayattu, the revered
                            martial art of Kerala, known as the mother of all martial arts.
                        </p>
                        <p className="mb-4">
                            Our motto, &quot;Ancient, Inspired Minds,&quot; reflects our mission to bridge the
                            timeless wisdom of the past with the boundless potential of the present.
                            Through the rhythmic flow of movement, the discipline of the body, and
                            the awakening of the spirit, we invite you to embark on a transformative
                            journey.
                        </p>
                        <p>
                            Here, tradition thrives, inspiration flourishes, and every student becomes a
                            part of a legacy that transcends time.
                        </p>
                    </div>
                </section>

                {/* Section 3 */}
                <section ref={section3Ref} className="min-h-screen flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl font-serif mb-4">About Us</h2>
                        <div className="w-32 h-1 bg-blue-100 mb-16"></div>
                    </div>
                    <div className="md:w-2/3">
                        <div className="mb-8">
                            <p className="mb-4">
                                Welcome to CVN Klari UK, the home of Kalaripayattu, the ancient martial art of
                                Kerala, India, and the mother of all martial arts. We are dedicated to preserving
                                and sharing this extraordinary tradition, blending physical discipline, mental focus,
                                and cultural heritage to inspire modern minds.
                            </p>
                            <p className="mb-4">
                                At CVN Klari UK, our approach is holistic, combining rigorous physical
                                conditioning, mindful techniques, and philosophical teachings. Through practices
                                such as dynamic movements, animal postures, and breath control, we aim to
                                empower individuals to achieve strength, flexibility, and emotional resilience.
                            </p>
                        </div>
                        <div>
                            <div className="mb-2">Horse Posture</div>
                            <Image
                                src="/images/DSC_2022.JPG"
                                alt="Horse Posture demonstration"
                                width={600}
                                height={300}
                                className="rounded"
                            />
                        </div>
                    </div>
                </section>

                <section ref={section4Ref} className="min-h-screen flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl font-serif mb-4">About Us</h2>
                        <div className="w-32 h-1 bg-blue-100 mb-16"></div>
                    </div>
                    <div className="md:w-2/3">
                        <div className="mb-8">
                            <p className="mb-4">
                                Welcome to CVN Klari UK, the home of Kalaripayattu, the ancient martial art of
                                Kerala, India, and the mother of all martial arts. We are dedicated to preserving
                                and sharing this extraordinary tradition, blending physical discipline, mental focus,
                                and cultural heritage to inspire modern minds.
                            </p>
                            <p className="mb-4">
                                At CVN Klari UK, our approach is holistic, combining rigorous physical
                                conditioning, mindful techniques, and philosophical teachings. Through practices
                                such as dynamic movements, animal postures, and breath control, we aim to
                                empower individuals to achieve strength, flexibility, and emotional resilience.
                            </p>
                        </div>
                        <div>
                            <div className="mb-2">Horse Posture</div>
                            <Image
                                src="/images/DSC_2022.JPG"
                                alt="Horse Posture demonstration"
                                width={600}
                                height={300}
                                className="rounded"
                            />
                        </div>
                    </div>
                </section>

                <section ref={section5Ref} className="min-h-screen flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl font-serif mb-4">About Us</h2>
                        <div className="w-32 h-1 bg-blue-100 mb-16"></div>
                    </div>
                    <div className="md:w-2/3">
                        <div className="mb-8">
                            <p className="mb-4">
                                Welcome to CVN Klari UK, the home of Kalaripayattu, the ancient martial art of
                                Kerala, India, and the mother of all martial arts. We are dedicated to preserving
                                and sharing this extraordinary tradition, blending physical discipline, mental focus,
                                and cultural heritage to inspire modern minds.
                            </p>
                            <p className="mb-4">
                                At CVN Klari UK, our approach is holistic, combining rigorous physical
                                conditioning, mindful techniques, and philosophical teachings. Through practices
                                such as dynamic movements, animal postures, and breath control, we aim to
                                empower individuals to achieve strength, flexibility, and emotional resilience.
                            </p>
                        </div>
                        <div>
                            <div className="mb-2">Horse Posture</div>
                            <Image
                                src="/images/DSC_2022.JPG"
                                alt="Horse Posture demonstration"
                                width={600}
                                height={300}
                                className="rounded"
                            />
                        </div>
                    </div>
                </section>

                <section ref={section6Ref} className="min-h-screen flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl font-serif mb-4">About Us</h2>
                        <div className="w-32 h-1 bg-blue-100 mb-16"></div>
                    </div>
                    <div className="md:w-2/3">
                        <div className="mb-8">
                            <p className="mb-4">
                                Welcome to CVN Klari UK, the home of Kalaripayattu, the ancient martial art of
                                Kerala, India, and the mother of all martial arts. We are dedicated to preserving
                                and sharing this extraordinary tradition, blending physical discipline, mental focus,
                                and cultural heritage to inspire modern minds.
                            </p>
                            <p className="mb-4">
                                At CVN Klari UK, our approach is holistic, combining rigorous physical
                                conditioning, mindful techniques, and philosophical teachings. Through practices
                                such as dynamic movements, animal postures, and breath control, we aim to
                                empower individuals to achieve strength, flexibility, and emotional resilience.
                            </p>
                        </div>
                        <div>
                            <div className="mb-2">Horse Posture</div>
                            <Image
                                src="/images/DSC_2022.JPG"
                                alt="Horse Posture demonstration"
                                width={600}
                                height={300}
                                className="rounded"
                            />
                        </div>
                    </div>
                </section>

            </main>

            <footer className="px-6 md:px-12 py-6 sticky bottom-0 bg-white z-10">
                <div className="flex justify-between items-center">
                    <div className="pagination flex space-x-6">
                        {[startPage, startPage + 1, startPage + 2].map((page) => (
                            <button
                                key={page}
                                onClick={() => navigateTo(page)}
                                className={`${activePage === page ? 'border-b-2 border-black' : ''}`}
                            >
                                {page.toString().padStart(2, '0')}
                            </button>
                        ))}
                    </div>
                    <button className="flex flex-col items-center justify-center w-10 h-10">
                        <div className="w-6 h-0.5 bg-black mb-1"></div>
                        <div className="w-6 h-0.5 bg-black mb-1"></div>
                        <div className="w-6 h-0.5 bg-black"></div>
                    </button>
                </div>

            </footer>
        </div>
    );
}