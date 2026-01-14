import { FaWhatsapp } from "react-icons/fa";
import majuImg from "../assets/maju.png";
import KeerthiFront from "../assets/real-results/KeerthiFront.jpg";
import ManojFront from "../assets/real-results/ManojFront.jpg";
import NaushadFront from "../assets/real-results/NaushadFront.jpg";
import RakshaFront from "../assets/real-results/RakshaFront.jpg";
import SandeepFront from "../assets/real-results/SandeepFront.jpg";
import VinayFront from "../assets/real-results/VinayFront.jpg";
import AyushFront from "../assets/real-results/AyushFront.jpg";

const ThankYou = () => {
    console.log("ThankYou.jsx: MOUNTING");
    // Array of result images to display
    const realResults = [
        KeerthiFront,
        ManojFront,
        NaushadFront,
        RakshaFront,
        SandeepFront,
        VinayFront,
        AyushFront
    ];

    return (
        <div className="min-h-screen bg-white text-[#333]">
            {/* Google Fonts */}
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;700&family=DM+Serif+Display&display=swap');
          .font-dm-serif { font-family: 'DM Serif Display', serif; }
          .font-dm-sans { font-family: 'DM Sans', sans-serif; }
        `}
            </style>

            {/* Header / Top Section */}
            <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
                    {/* Left Content */}
                    <div className="flex-1 space-y-6 font-dm-sans pt-0 md:pt-10 flex flex-col items-center md:items-start">
                        <div className="text-sm font-bold tracking-wide uppercase text-gray-500">
                            FitBharat Fitness <span className="text-gray-400">| Mentally Physically Spiritually</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-dm-serif font-normal leading-tight">
                            Thank You for Joining Us! 🙏
                        </h1>

                        <div className="space-y-4 text-gray-600 text-lg">
                            <p>
                                Welcome to FitBharat Fitness Online! 🎉 We’re thrilled to have you on board.
                                You’ve just taken an incredible step towards a healthier, happier you.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 space-y-3 text-left">
                                <p className="font-bold">Note:</p>
                                <ol className="list-decimal list-inside space-y-2 ml-2">
                                    <li>The meeting link has been sent to your email.</li>
                                    <li>Our executive will call you and share details on WhatsApp before the consultation. Be ready at your scheduled time.</li>
                                </ol>
                            </div>
                        </div>

                        <a
                            href="https://chat.whatsapp.com/IHIRNwlEFDRIjBfyFE1lN1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#0d8d1b] hover:bg-[#0b7a17] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
                        >
                            <FaWhatsapp className="text-2xl" />
                            Join Our Whatsapp Group
                        </a>
                    </div>

                    {/* Right Content - Image */}
                    <div className="flex-1 w-full max-w-md mx-auto md:max-w-full">
                        <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                            <img
                                src={majuImg}
                                alt="Manjunath"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Real Results Section */}
            <div className="bg-white py-16 font-dm-sans border-t border-gray-100 pb-32">
                <div className="max-w-6xl mx-auto px-4 text-center space-y-12">
                    <h2 className="text-4xl md:text-5xl font-dm-serif text-[#333]">
                        See Real People Achieve <span className="text-[#fe6246] italic">Real Results!</span>
                    </h2>

                    {/* Results Grid - Using Real Images */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                        {realResults.map((imgSrc, i) => (
                            <div key={i} className="aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden relative shadow-md">
                                <img
                                    src={imgSrc}
                                    alt={`Transformation Result ${i + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                {/* Day 1 Badge */}
                                <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-[#b91c1c] text-white px-2 py-1 md:px-4 md:py-1.5 rounded md:rounded-md shadow-lg font-bold text-[10px] md:text-base pointer-events-none">
                                    Day 1
                                </div>
                                {/* Day 90 Badge */}
                                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-[#b91c1c] text-white px-2 py-1 md:px-4 md:py-1.5 rounded md:rounded-md shadow-lg font-bold text-[10px] md:text-base pointer-events-none">
                                    Day 90
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sticky Footer Bar */}
                    <div
                        style={{
                            position: 'fixed',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            zIndex: 9999,
                            backgroundColor: '#0d8d1b',
                            width: '100%',
                        }}
                    >
                        <a
                            href="https://chat.whatsapp.com/IHIRNwlEFDRIjBfyFE1lN1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full justify-center items-center gap-3 text-white py-4 font-bold text-xl transition-colors hover:bg-[#0b7a17]"
                        >
                            <FaWhatsapp className="text-2xl" />
                            Join Our Whatsapp Group
                        </a>
                    </div>

                    <div className="text-gray-400 text-sm mt-12">
                        All rights reserved
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
