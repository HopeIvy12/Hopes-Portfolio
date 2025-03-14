"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import styles from "./navbar.module.css"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>DEV</span>
        </Link>

        <button className={styles.mobileMenuButton} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="#projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#skills" onClick={() => setIsMenuOpen(false)}>
                Skills
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

