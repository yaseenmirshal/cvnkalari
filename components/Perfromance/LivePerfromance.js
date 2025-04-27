import useMobileView from "@/hooks/useMobileView"
import MenuDots from "../MenuDots"
import Image from "next/image";
const LivePerfromance = () => {

    const isMobile = useMobileView();
    return (
        <>
            {!isMobile && (
                <div className="absolute top-20 left-10">
                    <MenuDots />
                </div>
            )}
            <div className="relative">
                <div className="bg-[#E9F4F4] p-8 relative">
                    <Image
                        src="/images/IMG_2824.jpg"
                        alt="Trainer Image 1"
                        width={350}
                        height={450}
                        className="relative z-10"
                    />
                    <Image
                        src="/images/IMG_2824.jpg"
                        alt="Trainer Image 2"
                        width={350}
                        height={450}
                        className="absolute top-8 left-8 z-20"
                    />
                </div>

                <div className="absolute -left-10 top-1/2 -translate-y-1/2 rotate-180 md:rotate-0">
                    <p className="text-sm tracking-widest uppercase font-semibold">
                        Our Best Trainer
                    </p>
                </div>
            </div>

            <div className="md:ml-10 mt-10 md:mt-0 max-w-xl">
                <h2 className="text-4xl font-bold mb-6 leading-snug">
                    Kalaripayattu live <br /> performance
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    At CVN Klari UK, we not only offer authentic Kalaripayattu training but also conduct stage performances, workshops and cultural events to showcase the beauty and power of this ancient martial art. Whether you&apos;re interested in joining classes, booking a performance, or organizing an event, we&apos;re here to help.
                </p>
            </div>

        </>
    )
}

export default LivePerfromance
