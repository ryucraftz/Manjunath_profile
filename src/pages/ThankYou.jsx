// Import Real Result Images
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
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left Content */}
                    <div className="flex-1 space-y-6 font-dm-sans pt-0 md:pt-10">
                        <div className="text-sm font-bold tracking-wide uppercase text-gray-500">
                            Healthy Nation <span className="text-gray-400">| Mentally Physically Spiritually</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-dm-serif font-normal leading-tight">
                            Thank You for Joining Us! 🙏
                        </h1>

                        <div className="space-y-4 text-gray-600 text-lg">
                            <p>
                                Welcome to Healthy Nation Online! 🎉 We’re thrilled to have you on board.
                                You’ve just taken an incredible step towards a healthier, happier you.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 space-y-3">
                                <p className="font-bold">Note:</p>
                                <ol className="list-decimal list-inside space-y-2 ml-2">
                                    <li>The meeting link has been sent to your email.</li>
                                    <li>Our executive will call you and share details on WhatsApp before the consultation. Be ready at your scheduled time.</li>
                                </ol>
                            </div>
                        </div>

                        <a
                            href="https://chat.whatsapp.com/HJgJCfiNsUULmgySHs2m2m"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#0d8d1b] hover:bg-[#0b7a17] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
                        >
                            <FaWhatsapp className="text-2xl" />
                            Join Our Whatsapp Group
                        </a>
                    </div>

                    {/* Right Content - Video */}
                    <div className="flex-1 w-full max-w-md mx-auto md:max-w-full">
                        <div className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl relative">
                            {/* Placeholder for Video - In a real scenario, embed the video here */}
                            <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4 bg-gray-900">
                                <div>
                                    <p className="font-bold text-xl mb-2">Welcome Video</p>
                                    <p className="text-gray-400 text-sm">Video content not available.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Real Results Section */}
            <div className="bg-white py-16 font-dm-sans border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 text-center space-y-12">
                    <h2 className="text-4xl md:text-5xl font-dm-serif text-[#333]">
                        See Real People Achieve <span className="text-[#fe6246] italic">Real Results!</span>
                    </h2>

                    {/* Results Grid - Using Real Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {realResults.map((imgSrc, i) => (
                            <div key={i} className="aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden relative shadow-md">
                                <img
                                    src={imgSrc}
                                    alt={`Transformation Result ${i + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    <a
                        href="https://chat.whatsapp.com/HJgJCfiNsUULmgySHs2m2m"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#0d8d1b] hover:bg-[#0b7a17] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
                    >
                        <FaWhatsapp className="text-2xl" />
                        Join Our Whatsapp Group
                    </a>

                    <div className="text-gray-400 text-sm mt-12">
                        All rights reserved
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
