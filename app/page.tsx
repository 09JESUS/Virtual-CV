import Link from "next/link"

import {
  Shield,
  Code,
  Server,
  Lock,
  Database,
  Zap,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { HeroSection } from "@/components/hero-section"
import { ContactForm } from "@/components/contact-form"
import { ParticlesBackground } from "@/components/particles-background"
import { GlitchText } from "@/components/glitch-text"
import { MatrixRain } from "@/components/matrix-rain"
import { AnimatedSkillCard } from "@/components/animated-skill-card"
import { CyberCursor } from "@/components/cyber-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { MobileMenu } from "@/components/mobile-menu"

import { headers } from "next/headers"
// At the very top of your file, after imports
export const metadata = {
  title: "Forget Nukeri",
  description: "Final Year IT Student | Cybersecurity & Software Development Enthusiast",
  icons: {
    icon: "/images/favicon.svg",
  },
};

// Define a type for the fetched project data
interface FetchedProject {
  title: string
  description: string
  tags: string[]
  link: string
}

const getGitHubProjects = async () => {
  try {
    const headersList = headers()
    const host = headersList.get("host")
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https"
    const baseUrl = `${protocol}://${host}`

    const res = await fetch(`${baseUrl}/api/github-projects`, {
      cache: "no-store",
    })

    if (!res.ok) {
      console.error("Failed to fetch GitHub projects:", res.statusText)
      return []
    }

    return await res.json()
  } catch (err) {
    console.error("Error fetching GitHub projects:", err)
    return []
  }
}

export async function GET() {
  const res = await fetch("https://api.github.com/users/09JESUS/repos")
  const data = await res.json()
  return Response.json(data)
}

export default async function Home() {
  const githubProjects = await getGitHubProjects()

  return (
    <div className="min-h-screen bg-black text-white">
      <SmoothScroll />
      <ParticlesBackground />
      <CyberCursor />

      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
  {/* First Name */}
  <GlitchText
    text="Forget"
    className="text-3xl md:text-4xl font-extrabold text-green-500"
  />

  {/* Last Name */}
  <GlitchText
    text="Nukeri"
    className="text-3xl md:text-4xl font-extrabold text-white"
  />

  
</div>

        <nav className="hidden md:flex gap-6">
          <Link href="#capabilities" className="hover:text-green-500 transition-colors">
            What I Do
          </Link>
          <Link href="#skills" className="hover:text-green-500 transition-colors">
            Skills
          </Link>
          <Link href="#experience" className="hover:text-green-500 transition-colors">
            Experience
          </Link>
          <Link href="#projects" className="hover:text-green-500 transition-colors">
            Projects
          </Link>
          <Link href="#about" className="hover:text-green-500 transition-colors">
            About Me
          </Link>
          <Link href="#contact" className="hover:text-green-500 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="hidden md:block">
          <a href="/ForgetNukeriCV.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">📄 View Resume</button>
          </a>
        </div>
        <MobileMenu />
      </header>

      {/* Start with "What I Can Do" Section */}
      <section id="capabilities" className="container mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-green-500 pl-4">What I Can Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatedSkillCard
            icon={<Shield className="h-10 w-10 text-green-500" />}
            title="IT Support & Troubleshooting"
            description="Installation, configuration, troubleshooting, and updating of operating systems and applications."
          />
          <AnimatedSkillCard
            icon={<Lock className="h-10 w-10 text-green-500" />}
            title="Cybersecurity Solutions"
            description="Network vulnerabilities assessment, threat detection, privacy and data confidentiality, cyber best practices implementation."
          />
          <AnimatedSkillCard
            icon={<Code className="h-10 w-10 text-green-500" />}
            title="Full-Stack Development"
            description="Build robust applications using SQL, Python, HTML, React, C++, Java, and C# for various development projects."
          />
          <AnimatedSkillCard
            icon={<Server className="h-10 w-10 text-green-500" />}
            title="System Administration"
            description="Workstation configuration, network connectivity setup, and comprehensive system administration."
          />
          <AnimatedSkillCard
            icon={<Zap className="h-10 w-10 text-green-500" />}
            title="Technical Leadership"
            description="Mentor students, lead technical teams, and communicate complex solutions to both technical and non-technical stakeholders."
          />
          <AnimatedSkillCard
            icon={<Database className="h-10 w-10 text-green-500" />}
            title="Data & AI Solutions"
            description="Develop AI-powered applications, manage databases, and implement data-driven solutions for real-world problems."
          />
        </div>

        
      </section>

      

      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 border-l-4 border-green-500 pl-4">Technical Expertise</h2>

          <h3 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">Programming & Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
              <h4 className="text-lg font-semibold text-green-500 mb-4">Languages & Frameworks</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <strong>Frontend:</strong> HTML, CSS, React, JavaScript
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <strong>Backend:</strong> Python, Java, C++, C#
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <strong>Database:</strong> SQL, Database Design & Management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <strong>Mobile:</strong> Cross-platform mobile development
                </li>
              </ul>
            </div>
            <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
              <h4 className="text-lg font-semibold text-green-500 mb-4">Cybersecurity & Systems</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Network vulnerability assessment and penetration testing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Information security protocols and data protection
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  System administration and network configuration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Threat detection and incident response
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-8 border-l-4 border-green-500 pl-4">Professional Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
              <h4 className="text-lg font-semibold text-green-500 mb-4">Leadership & Communication</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Student mentoring and technical guidance (150+ students)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Cross-functional team collaboration and project management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Public relations and stakeholder communication
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Technical documentation and knowledge transfer
                </li>
              </ul>
            </div>
            <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
              <h4 className="text-lg font-semibold text-green-500 mb-4">Problem-Solving & Analysis</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Complex system troubleshooting and debugging
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Requirements analysis and solution architecture
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Performance optimization and scalability planning
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Continuous learning and technology adaptation
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-8 border-l-4 border-green-500 pl-4">Certifications & Credentials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
              <h4 className="text-lg font-semibold text-green-500 mb-2">
                Google Cybersecurity Professional Certificate
              </h4>
              <p className="text-gray-400 text-sm mb-2">Administered by Coursera</p>
              <p className="text-gray-300 text-sm">
                Comprehensive cybersecurity training covering threat detection, incident response, and security best
                practices.
              </p>
            </div>
            <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
              <h4 className="text-lg font-semibold text-green-500 mb-2">Google Technical Support Fundamentals</h4>
              <p className="text-gray-400 text-sm mb-2">Professional Certificate</p>
              <p className="text-gray-300 text-sm">
                Advanced technical support methodologies and customer service excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 border-l-4 border-green-500 pl-4">Professional Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-green-500">
                    Student Assistant - Object-Oriented Programming (Java)
                  </h3>
                  <p className="text-gray-400">North-West University | Vanderbijlpark, Gauteng</p>
                </div>
                <div className="text-gray-500 text-sm mt-2 md:mt-0">Serving 150+ Students</div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Provided comprehensive Java OOP support to 150+ students, including assignment guidance, debugging
                  assistance, and project mentorship
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Simplified complex OOP concepts (classes, inheritance, polymorphism, encapsulation) for diverse
                  learning styles
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Facilitated practical implementation of object-oriented design principles in real-world programming
                  scenarios
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Developed teaching materials and conducted group sessions to improve student understanding and
                  performance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="container mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-green-500 pl-4">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {githubProjects.length > 0 ? (
            [
              "C-PLUS-PLUS-File-Organizer",
              "Covid-19-Tracker",
              "Student-Attendance-List-NWU-",
              "FSolution-Investment-App",
            ].map((projectName) => {
              const project = githubProjects.find((p) => p.title === projectName)
              if (!project) return null
              return (
                <ProjectCard
                  key={project.link}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={`/images/${project.title}.jpeg`}
                  link={project.link}
                  website={project.website}
                />
              )
            })
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              Failed to load projects from GitHub. Please check your internet connection or try again later.
            </p>
          )}
        </div>
      </section>
      {/* Keep Hero & Matrix section after "What I Can Do" */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <MatrixRain />
        <HeroSection />
      </section>
      
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 border-l-4 border-green-500 pl-4">Education & Achievements</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
            <h3 className="text-xl font-bold text-green-500 mb-2">North-West University, South Africa</h3>
            <p className="text-gray-400 mb-4">BSc in Information Technology – Expected Dec 2025</p>
            <h4 className="text-lg font-semibold text-gray-300 mb-2">Key Modules & Specializations:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>IT Development & Software Engineering</li>
                <li>Artificial Intelligence (AI) & Machine Learning</li>
                <li>Data Structures & Algorithms</li>
                <li>Systems Design and Analysis</li>
              </ul>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Web & Mobile Development</li>
                <li>Information Security & Cybersecurity</li>
                <li>Statistics & Discrete Mathematics</li>
                <li>Database Management Systems</li>
              </ul>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-300 mb-2">Final Year Project:</h4>
              <p className="text-gray-300">
                <span className="font-bold text-green-500">NWU Sports League Manager</span> – Currently developing a
                comprehensive web-based system for managing NWU sports leagues, teams, fixtures, and match scores with
                real-time updates and analytics dashboard.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors mt-8">
            <h3 className="text-xl font-bold text-green-500 mb-4">Leadership & Recognition</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-2 text-gray-300">
                <span className="text-green-500 mt-1">🏆</span>
                <div>
                  <span className="font-semibold">Golden Key International Honour Society</span> (Top 15%)
                  <p className="text-gray-400 text-sm mt-1">
                    Recognized for academic excellence and leadership potential
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <span className="text-green-500 mt-1">👥</span>
                <div>
                  <span className="font-semibold">RCL Public Relations Officer</span>
                  <p className="text-gray-400 text-sm mt-1">
                    Leadership role representing student interests and managing communications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-green-500 pl-4">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                I'm always open to discussing new projects, job opportunities, or collaborations in cybersecurity and
                software development.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-green-500" />
                  </div>
                  <a
                    href="mailto:forgetnukeri585@gmail.com"
                    className="text-gray-300 hover:text-green-500 transition-colors"
                  >
                    forgetnukeri585@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-blue-500" />
                  </div>
                  <a href="tel:+27762852630" className="text-gray-300 hover:text-blue-500 transition-colors">
                    076 285 2630
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <User className="h-5 w-5 text-green-500" />
                  </div>
                  <span className="text-gray-300">FSolution.-Dev</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Github className="h-5 w-5 text-green-500" />
                  </div>
                  <a
                    href="https://github.com/09JESUS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-500 transition-colors"
                  >
                    github.com/09JESUS
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a href="https://github.com/09JESUS" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full border-green-500 bg-transparent">
                    <Github className="h-5 w-5 text-green-500" />
                  </Button>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full border-green-500 bg-transparent">
                    <Linkedin className="h-5 w-5 text-green-500" />
                  </Button>
                </a>
                <a href="mailto:forgetnukeri585@gmail.com">
                  <Button variant="outline" size="icon" className="rounded-full border-green-500 bg-transparent">
                    <Mail className="h-5 w-5 text-green-500" />
                  </Button>
                </a>
                <a href="tel:+27762852630">
                  <Button variant="outline" size="icon" className="rounded-full border-blue-500 bg-transparent">
                    <Phone className="h-5 w-5 text-blue-500" />
                  </Button>
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 px-4 mt-12">
  {[
    "https://streak-stats.demolab.com?user=09JESUS&theme=react&border_radius=10",
    "https://github-readme-stats.vercel.app/api?username=09JESUS&count_private=true&show_icons=true&theme=react&rank_icon=github&border_radius=10",
    "https://github-readme-stats.vercel.app/api/top-langs?username=09JESUS&hide=HTML&langs_count=8&layout=compact&theme=react&border_radius=10&size_weight=0.5&count_weight=0.5&exclude_repo=github-readme-stats",
  ].map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`GitHub Stats ${index + 1}`}
      className="w-full md:w-auto max-w-sm rounded-xl shadow-lg"
    />
  ))}
</div>

      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} <span className="text-green-500">Forget Nukeri</span>. All rights reserved.
          </p>
          <p className="mt-2 text-sm">Designed and built with security in mind by Forget.</p>
        </div>
      </footer>

    
     
    </div>
  )
}
