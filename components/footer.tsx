import styles from "./footer.module.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>© {currentYear} John Doe. All rights reserved.</p>
        <p className={styles.credits}>Designed and built with Next.js</p>
      </div>
    </footer>
  )
}

