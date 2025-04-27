
"use client";
const VerticalDots = ({ totalSections, activeSection, onDotClick }) => {
    return (
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
            {[...Array(totalSections)].map((_, index) => (
                <button
                    key={`nav-dot-${index}`}
                    onClick={() => onDotClick(index + 1)}
                    className="group flex items-center"
                    aria-label={`Go to section ${index + 1}`}
                >
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === index + 1
                        ? 'bg-gray-300 hover:bg-gray-400'
                        : 'bg-black'
                        }`}></div>
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-gray-600">
                        {(index + 1).toString().padStart(2, '0')}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default VerticalDots