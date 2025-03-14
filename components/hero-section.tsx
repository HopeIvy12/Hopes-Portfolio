import Image from "next/image"
import styles from "./hero-section.module.css"

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.name}>Hope Ivy Pichur</span>
          <span className={styles.role}>Junior Software Engineer</span>
        </h1>
        <p className={styles.description}>
        
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.primaryButton}>
            View Projects
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Get In Touch
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/Profile.png"
            alt="portrait"
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  )
}

