import Image from 'next/image'
import useMobileView from '@/hooks/useMobileView'
import MenuDots from '../MenuDots';

const BestTrainer = () => {

    const isMobile = useMobileView();
    return (
        <>
            {!isMobile && (
                <div className="absolute top-20 left-10">
                    <MenuDots />
                </div>
            )}
            <div className="md:w-1/3 flex flex-col">
                <h2 className="text-3xl font-serif font-semibold mb-6">Our Best Trainer</h2>
                <p className="text-base font-serif leading-relaxed">
                    Our classes are led by Hrishikesh Kizhikiyil, an internationally acclaimed
                    Kalaripayattu expert. Trained at CVN Kalari Nadakkavu in Kerala and CVN Kalari
                    Japan, Hrishikesh brings unparalleled expertise to every session.
                </p>
            </div>

            <div className="relative md:w-1/3 flex flex-col gap-4 items-center bg-blue-50 p-4 mt-10 md:mt-0">
                <div className="relative w-full flex items-center gap-4">
                    <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 rotate-[-90deg] text-sm font-serif">
                        Cahaya Dewi
                    </div>
                    <div className="w-full h-48 relative overflow-hidden">
                        <Image
                            src="/images/IMG_9675.jpg"
                            alt="Trainer 1"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>

                <div className="relative w-full flex items-center gap-4">
                    <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 rotate-[-90deg] text-sm font-serif">
                        Claudia Alves
                    </div>
                    <div className="w-full h-48 relative overflow-hidden">
                        <Image
                            src="/images/PHOTO-20.jpg"
                            alt="Trainer 2"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>

            <div className="md:w-1/3 flex flex-col gap-10 mt-10 md:mt-0">

                <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <p className="text-base font-serif leading-relaxed">
                        Global Experience: Hrishikesh has represented India at prestigious festivals like
                        the Nyan Ying Folklore Festival (Taiwan), Asia Fest (Spain), and the Hanoi Millennial Anniversary (Vietnam).
                    </p>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <p className="text-base font-serif leading-relaxed">
                        Global Outreach: With a passion for teaching, he has conducted workshops and classes
                        in countries including Mauritius, Dubai, France, Germany, Japan, and the UK.
                    </p>
                </div>

            </div>
        </>
    )
}

export default BestTrainer
