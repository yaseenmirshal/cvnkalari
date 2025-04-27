
import Image from 'next/image';
import { useRef } from 'react';
import useMobileView from '@/hooks/useMobileView';
import MenuDots from '../MenuDots';

const Welcome = () => {

    const isMobile = useMobileView();


    return (
        <>
            {!isMobile && (
                <div className="absolute top-20 left-10">
                    <MenuDots />
                </div>
            )}

            <div className="md:w-1/2 flex justify-center">
                <div className="relative w-[500px] h-[400px]">
                    <Image
                        src="/images/DSC_2020.JPG"
                        alt="Kalaripayattu practitioners"
                        layout="fill"
                        objectFit="cover"
                        className="rounded"
                    />
                </div>
            </div>


            <div className="md:w-1/2 flex flex-col justify-center md:pl-12">
                <h2 className="text-4xl font-serif font-bold mb-6">
                    Welcome to CVN Kalari UK
                </h2>
                <p className="mb-4 text-lg leading-relaxed text-justify">
                    Step into a world where the echoes of an ancient legacy inspire the minds of today.
                    At CVN Kalari UK, we proudly teach Kalaripayattu, the revered martial art of Kerala,
                    known as the mother of all martial arts.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-justify">
                    Our motto, <q>Ancient, Inspired Minds,</q> reflects our mission to bridge the timeless
                    wisdom of the past with the boundless potential of the present. Through the rhythmic
                    flow of movement, the discipline of the body, and the awakening of the spirit, we invite
                    you to embark on a transformative journey.
                </p>
                <p className="text-lg leading-relaxed text-justify">
                    Here, tradition thrives, inspiration flourishes, and every student becomes a part
                    of a legacy that transcends time.
                </p>
            </div>
        </>
    )
}

export default Welcome
