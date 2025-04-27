import React from 'react'

const MenuDots = () => {
    return (
        <div className="flex space-x-4">
            {[...Array(3)].map((_, rowIndex) => (
                <div key={`menu-row-${rowIndex}`} className="flex flex-col space-y-4">
                    {[...Array(3)].map((_, colIndex) => (
                        <div key={`menu-dot-${rowIndex}-${colIndex}`} className="w-1 h-1 bg-black rounded-full"></div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default MenuDots
