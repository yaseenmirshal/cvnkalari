import Image from 'next/image';
import useMobileView from '@/hooks/useMobileView';
import MenuDots from '../MenuDots';

const Thanks = () => {
    const isMobile = useMobileView();

    return (
        <div className="flex flex-col items-center justify-between w-full h-full relative">

            {!isMobile && (
                <div className="absolute top-10 left-10">
                    <MenuDots />
                </div>
            )}

            <div className="flex-1 flex justify-center items-center w-full pt-20">
                <div className="w-full max-w-5xl">
                    <Image
                        src="/images/DSC_2021.jpg"
                        alt="Thanks Image"
                        width={1200}
                        height={700}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>


            <div className="w-full flex flex-col items-center gap-6 pb-10">



                <h2 className="text-5xl md:text-7xl font-bold text-center">
                    Thanks
                </h2>

            </div>

        </div>
    );
};

export default Thanks;
