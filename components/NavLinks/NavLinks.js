import Link from 'next/link'
import styles from './NavLinks.module.scss'

const navItems = [
    { href: '#about', label: 'About' },
    { href: '#service', label: 'Service' },
    { href: '#team', label: 'Team' },
]

const NavLinks = () => {
    return (
        <nav className={styles.navLinks}>
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={styles.navLink}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}

export default NavLinks
