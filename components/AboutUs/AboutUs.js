import Image from 'next/image'

import useMobileView from '@/hooks/useMobileView'
import MenuDots from '../MenuDots';
const AboutUs = () => {

    const isMobile = useMobileView();
    return (
        <>
            {!isMobile && (
                <div className="absolute top-20 left-10">
                    <MenuDots />
                </div>
            )}

            <div className="md:w-1/3 flex flex-col items-start pt-10">
                <h2 className="text-4xl font-serif font-bold mb-4">About Us</h2>
                <div className="w-24 h-1 bg-blue-100 mb-16"></div>
            </div>

            <div className="md:w-2/3 flex flex-col justify-start">
                <div className="mb-8">
                    <p className="mb-4 text-lg leading-relaxed text-justify">
                        Welcome to CVN Kalari UK, the home of Kalaripayattu, the ancient martial art of
                        Kerala, India, and the mother of all martial arts. We are dedicated to preserving
                        and sharing this extraordinary tradition, blending physical discipline, mental focus,
                        and cultural heritage to inspire modern minds.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed text-justify">
                        At CVN Kalari UK, our approach is holistic, combining rigorous physical
                        conditioning, mindful techniques, and philosophical teachings. Through practices
                        such as dynamic movements, animal postures, and breath control, we aim to
                        empower individuals to achieve strength, flexibility, and emotional resilience.
                    </p>
                </div>

                <div>
                    <div className="text-sm font-serif mb-2">Horse Posture</div>
                    <div className="relative w-[600px] h-[300px]">
                        <Image
                            src="/images/DSC_2022.JPG"
                            alt="Horse Posture demonstration"
                            layout="fill"
                            objectFit="cover"
                            className="rounded"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
