
import useMobileView from "@/hooks/useMobileView"
import MenuDots from "../MenuDots";
import Image from "next/image";
const OurMission = () => {
    const isMobile = useMobileView();

    return (

        <>
            {!isMobile && (
                <div className="absolute top-20 left-10">
                    <MenuDots />
                </div>
            )}

            <div className="md:w-1/3 flex flex-col pt-16">
                <h2 className="text-4xl font-serif font-bold mb-4">Our Mission</h2>
                <div className="w-24 h-1 bg-blue-100 mb-8"></div>
                <p className="text-lg leading-relaxed text-justify">
                    Guided by our motto, <span className="italic">&quot;Ancient, Inspired Minds,&quot;</span>
                    we strive to connect people with the rich legacy of Kalaripayattu while addressing
                    the physical and mental demands of contemporary life.
                </p>
            </div>

            <div className="md:w-1/3 flex justify-center items-center relative mt-10 md:mt-0">
                <div className="relative w-[300px] h-[300px] rounded-full bg-blue-50 flex items-center justify-center overflow-hidden">
                    <Image
                        src="/images/IMG_9674.jpg"
                        alt="Our Mission Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>

            <div className="md:w-1/3 flex flex-col gap-10 pt-16">
                <div>
                    <h3 className="font-bold text-lg mb-2">Session One</h3>
                    <p className="text-base leading-relaxed">
                        Regular classes in Milton Keynes<br />
                        Thursday & Sunday<br />
                        <span className="text-orange-500">06 to 07 PM</span><br />
                        Shenley Leisure Centre<br />
                        MK5 6HF
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-2">Session Two</h3>
                    <p className="text-base leading-relaxed">
                        Regular classes in Oxford<br />
                        Saturday<br />
                        <span className="text-orange-500">10 to 11 AM</span><br />
                        Cowley Road Methodist Church<br />
                        OX4 1JB
                    </p>
                </div>
            </div>
        </>

    )
}

export default OurMission
