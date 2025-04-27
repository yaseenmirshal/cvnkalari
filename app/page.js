// app/page.js
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import VerticalDots from '@/components/VerticalDots';
import MenuDots from '@/components/MenuDots';
import NavLinks from '@/components/NavLinks';
import style from '../styles/Home.module.scss';
import Welcome from '@/components/Welcome';
import AboutUs from '@/components/AboutUs';
import OurMission from '@/components/OurMission';
import WhyChoose from '@/components/WhyChoose';
import BestTrainer from '@/components/BestTrainer';
import LivePerfromance from '@/components/Perfromance/LivePerfromance';
import ContactUs from '@/components/ContactUs';
import Thanks from '@/components/Thanks';
import Footer from '@/components/Footer';

export default function Home() {
    const [activePage, setActivePage] = useState(1);

    const refs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const sectionPositions = refs.map(ref => ref.current.offsetTop);

            const currentPage = sectionPositions.findIndex(
                (pos, index) =>
                    scrollPosition >= pos &&
                    (index === sectionPositions.length - 1 || scrollPosition < sectionPositions[index + 1])
            );

            if (currentPage !== -1) {
                setActivePage(currentPage + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [refs]);

    const navigateTo = (pageNumber) => {
        refs[pageNumber - 1]?.current.scrollIntoView({ behavior: 'smooth' });
        setActivePage(pageNumber);
    };


    return (
        <div className="min-h-screen bg-white">
            <header className="py-4 px-6 md:px-12 flex justify-end items-center sticky top-0 bg-white z-10">
                <NavLinks />
            </header>

            <VerticalDots totalSections={6} activeSection={activePage} onDotClick={navigateTo} />

            <main className="px-6 md:px-12 py-8">
                <section ref={refs[0]} className="min-h-screen flex flex-col items-center justify-center relative">
                    <div className="absolute top-20 left-20">
                        <MenuDots />
                    </div>
                    <div className="flex flex-col items-center mb-6">
                        <div className={style.kalariLogo}>
                            <Image
                                src='/images/CVN-UK-5-01.png'
                                alt="CVN Kalari UK Logo"
                                fill
                            />
                        </div>
                        <h1 className={`text-6xl mb-100 ${style.kalariTitle}`}>Kalaripayattu</h1>
                    </div>
                </section>

                <section ref={refs[1]} className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 relative">
                    <Welcome />
                </section>

                <section ref={refs[2]} className="min-h-screen flex flex-col md:flex-row items-start justify-between px-6 md:px-24 relative">
                    <AboutUs />
                </section>

                <section ref={refs[3]} className="min-h-screen flex flex-col md:flex-row items-start justify-between px-6 md:px-24 relative">
                    <OurMission />
                </section>

                <section ref={refs[4]} className="min-h-screen flex flex-col md:flex-row items-start justify-between px-6 md:px-24 relative">
                    <WhyChoose />
                </section>

                <section ref={refs[5]} className="min-h-screen flex flex-col md:flex-row items-start justify-between px-6 md:px-24 relative">
                    <BestTrainer />
                </section>

                <section ref={refs[6]} className="min-h-screen flex flex-col md:flex-row items-start justify-between px-6 md:px-24 relative">
                    <LivePerfromance />
                </section>

                <section ref={refs[7]} className="min-h-screen flex flex-col md:flex-row items-start justify-between px-6 md:px-24 relative">
                    <ContactUs />
                </section>

                <section ref={refs[8]} className="min-h-screen flex flex-col items-start justify-between px-6 md:px-24 relative bg-white">
                    <Thanks />
                </section>
            </main>

            <Footer activePage={activePage} navigateTo={navigateTo} />

        </div>
    );
}
