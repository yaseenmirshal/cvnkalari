import useMobileView from "@/hooks/useMobileView"
import MenuDots from "../MenuDots";
import Image from "next/image";

const ContactUs = () => {

    const isMobile = useMobileView();
    return (
        <>
            {!isMobile && (
                <div className="absolute top-20 left-10">
                    <MenuDots />
                </div>
            )}

            <div className="flex flex-col gap-10">
                v                <h2 className="text-3xl font-bold relative w-fit">
                    <span className="bg-[#E9F4F4] px-2">Contact Us</span>
                </h2>

                v                <div className="relative w-fit">
                    <div className="bg-[#E9F4F4] w-64 h-64 absolute -bottom-6 -right-6 -z-10"></div>
                    <Image
                        src="/images/kalaripayattu_contact.jpg"
                        alt="Contact Image"
                        width={300}
                        height={300}
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="flex-1 max-w-2xl flex flex-col gap-8">
                <p className="text-lg leading-relaxed">
                    We&apos;re here to guide you on your journey into the ancient art of Kalaripayattu. Whether you&apos;re interested in joining our classes or have questions about our programs, feel free to reach out.
                </p>

                <div className="flex flex-col gap-4 text-base">
                    <div>
                        <span className="text-red-500">📍</span> <strong>Location:</strong> Oxford and Milton Keynes, UK
                    </div>

                    <div>
                        <span className="text-gray-700">📞</span> <strong>Call/WhatsApp:</strong>
                        <ul className="list-disc list-inside pl-2">
                            <li>Hrishikesh Kizhikkiyil – +44 7818 975 459</li>
                            <li>Dao Shu Oxford Enquiries – +44 7816 868 100</li>
                        </ul>
                    </div>

                    <div>
                        <span className="text-gray-700">✉️</span> <strong>Email Us:</strong>
                        <ul className="list-disc list-inside pl-2">
                            <li>cvnkalariuk@gmail.com</li>
                            <li>daoshuoxford@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <p className="mt-8 text-center text-base">
                    We look forward to hearing from you and welcoming you to CVN Klari UK.
                </p>
            </div>
        </>
    )
}

export default ContactUs
