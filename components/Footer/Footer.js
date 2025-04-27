import React from 'react'

const Footer = ({ activePage, navigateTo }) => {

    const startPage = Math.floor((activePage - 1) / 3) * 3 + 1;

    return (
        <footer className="px-6 md:px-12 py-6 sticky bottom-0 bg-transparent z-10">
            <div className="flex justify-between items-center">
                <div className="pagination flex space-x-6">
                    {[startPage, startPage + 1, startPage + 2].map((page) => (
                        <button
                            key={page}
                            onClick={() => navigateTo(page)}
                            className={`${activePage === page ? 'border-b-2 border-black' : ''}`}
                        >
                            {page.toString().padStart(2, '0')}
                        </button>
                    ))}
                </div>
                <button className="flex flex-col items-center justify-center w-10 h-10">
                    <div className="w-6 h-0.5 bg-black mb-1"></div>
                    <div className="w-6 h-0.5 bg-black mb-1"></div>
                    <div className="w-6 h-0.5 bg-black"></div>
                </button>
            </div>
        </footer>
    )
}

export default Footer
