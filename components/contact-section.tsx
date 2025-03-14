"use client"

import type React from "react"

import { useState } from "react"
import styles from "./contact-section.module.css"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    alert("Thanks for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.sectionTitle}>Contact</h2>

      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h3 className={styles.contactSubtitle}>Get In Touch</h3>
          <p className={styles.contactText}>
            I am currently available for opportunities.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <Mail size={20} />
              <span>hopeivy@hotmail.co.uk</span>
            </div>
            {/* <div className={styles.contactItem}>
              <Phone size={20} />
              <span>+1 (555) 123-4567</span>
            </div> */}
            <div className={styles.contactItem}>
              <MapPin size={20} />
              <span>Bedfordshire/London/Remote</span>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              <Github size={24} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Linkedin size={24} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={styles.formTextarea}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

