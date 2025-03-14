import styles from "./skills-section.module.css"
import { Code, Server, Layout, Database, GitBranch } from "lucide-react"

const skillCategories = [
  {
    id: 1,
    title: "Frontend",
    icon: <Layout size={32} />,
    skills: ["HTML5", "JavaScript", "React", "Next.js", "CSS Modules", "Responsive Design"],
  },
  {
    id: 2,
    title: "Backend",
    icon: <Server size={32} />,
    skills: ["Node.js", "Express", "RESTful APIs", "Authentication"],
  },
  {
    id: 3,
    title: "Testing",
    icon: <Code size={32} />,
    skills: ["Vitest", "Playwright"],
  },
  {
    id: 4,
    title: "Databases",
    icon: <Database size={32} />,
    skills: ["SQL", "PostgreSQL"],
  },
  // {
  //   id: 5,
  //   title: "Tools",
  //   icon: <Terminal size={32} />,
  //   skills: ["VS Code", "npm", "Webpack", "Chrome DevTools"],
  // },
  {
    id: 5,
    title: "Version Control",
    icon: <GitBranch size={32} />,
    skills: ["Git", "GitHub", "CI/CD"],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.sectionTitle}>Skills</h2>
      <div className={styles.skillsGrid}>
        {skillCategories.map((category) => (
          <div key={category.id} className={styles.skillCard}>
            <div className={styles.skillIcon}>{category.icon}</div>
            <h3 className={styles.skillCategoryTitle}>{category.title}</h3>
            <ul className={styles.skillsList}>
              {category.skills.map((skill, index) => (
                <li key={index} className={styles.skillItem}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

