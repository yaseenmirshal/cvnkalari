import Link from 'next/link'
import React from 'react'

const NavLinks = () => {
    return (
        <nav className="flex space-x-8">
            <Link href="#about" className="text-gray-800 hover:text-gray-600">About</Link>
            <Link href="#service" className="text-gray-800 hover:text-gray-600">Service</Link>
            <Link href="#team" className="text-gray-800 hover:text-gray-600">Team</Link>
        </nav>
    )
}

export default NavLinks
