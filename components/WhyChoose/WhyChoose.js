import Image from "next/image"
import useMobileView from "@/hooks/useMobileView"
import MenuDots from "../MenuDots";

const WhyChoose = () => {

    const isMobile = useMobileView();

    return (
        <>
            {!isMobile && (
                <div className="absolute top-20 left-10">
                    <MenuDots />
                </div>
            )}
            <div className="md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
                <div className="relative w-[320px] h-[320px] rounded-full bg-blue-50 flex items-center justify-center overflow-hidden">
                    <Image
                        src="/images/IMG_5494.jpg"
                        alt="Why Choose Us"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>

            <div className="md:w-1/2 flex flex-col pt-16">
                <div className="w-32 h-1 bg-blue-100 mb-6"></div>

                <h2 className="text-lg font-bold mb-6">Why Choose Us?</h2>

                <p className="text-lg leading-relaxed text-justify font-serif">
                    We offer authentic Kalaripayattu training that not only enhances physical fitness
                    but also fosters mental clarity, emotional stability, and self-confidence. Whether
                    you are a beginner or an advanced practitioner, our supportive environment is the
                    perfect place to embrace the spirit of this ancient art.
                </p>

                <div className="w-full h-1 bg-blue-100 mt-8"></div>
            </div>
        </>
    )
}

export default WhyChoose
