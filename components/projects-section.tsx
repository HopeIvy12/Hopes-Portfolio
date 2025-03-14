import Image from "next/image"
import styles from "./projects-section.module.css"


const projects = [
  {
    id: 1,
    title: "Aida",
    description: "Aida is an AI supportive assistant designed to help individuals navigate some of the issues surrounding food insecurity with more ease.",
    image: "/Aida.png",
    tags: ["Next.js", "TypeScript", "React", "Node.js", "Tailwind", "Pinecone", "Vercel", "GitHub Actions"],
    link: "https://aida-peach.vercel.app/",
  },
  {
    id: 2,
    title: "There is Hope",
    description: "There is Hope is my passion project. It's an accessible accommodation finding app designed to help disabled travelers find hotels that truly meet their needs.",
    image: "/ThereIsHope.png",
    tags: [
      "Figma for wireframing","React","CSS Modules","JavaScript","Authentication on Supabase", "Vercel Deployment"],
    link: "https://there-is-hope.vercel.app/",
  },
  {
    id: 3,
    title: "Flock",
    description: "A productivity tool for organizing tasks with drag-and-drop functionality.",
    image: "/Flock.png",
    tags: ["Figma for wireframing","React","CSS Modules","JavaScript","Authentication on Supabase", "Vercel Deployment"],
    link: "https://final-project-flock.vercel.app/",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={100}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} className={styles.projectLink}>
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

