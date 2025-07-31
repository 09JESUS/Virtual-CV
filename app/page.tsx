import Link from "next/link";

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
import { HackerTerminal } from "@/components/hacker-terminal"
import { SmoothScroll } from "@/components/smooth-scroll"
import { MobileMenu } from "@/components/mobile-menu"
import { PortfolioChatbot } from "@/components/portfolio-chatbot"
import { InteractiveTerminal } from "@/components/interactive-terminal"
import { headers } from 'next/headers';
// Define a type for the fetched project data
interface FetchedProject {
  title: string
  description: string
  tags: string[]
  link: string
}



const getGitHubProjects = async () => {
  try {
    const headersList = headers();
    const host = headersList.get('host');
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;

    const res = await fetch(`${baseUrl}/api/github-projects`, {
      cache: 'no-store', // optional: avoids cached response
    });

    if (!res.ok) {
      console.error('Failed to fetch GitHub projects:', res.statusText);
      return [];
    }

    return await res.json();
  } catch (err) {
    console.error('Error fetching GitHub projects:', err);
    return [];
  }
};

export async function GET() {
  const res = await fetch('https://api.github.com/users/09JESUS/repos');
  const data = await res.json();
  return Response.json(data);
}

export default async function Home() {
  const githubProjects = await getGitHubProjects()

  return (
    <div className="min-h-screen bg-black text-white">
      <SmoothScroll />
      <ParticlesBackground />
      <CyberCursor />
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <GlitchText text="Forget " className="text-green-500" />
          <GlitchText text="Nukeri" className="text-red-500" />
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="hover:text-green-500 transition-colors">
            About
          </Link>
          <Link href="#experience" className="hover:text-green-500 transition-colors">
            Experience
          </Link>
          <Link href="#skills" className="hover:text-green-500 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-green-500 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-green-500 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="hidden md:block">
          <a href="/ForgetNukeriCV.pdf" target="_blank" rel="noopener noreferrer">
  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
    📄 View Resume
  </button>
</a>





        </div>
        <MobileMenu />
      </header>

      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <MatrixRain />
        <HeroSection />
      </section>
      

      <section id="about" className="container mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-green-500 pl-4">About Me</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <p className="text-gray-300">
              I'm a final year Information Technology student at North-West University (NWU), specializing in
              cybersecurity and software development. My passion lies in creating secure, efficient solutions that solve
              real-world problems.
            </p>
            <p className="text-gray-300">
              My goal is to build a career at the intersection of cybersecurity and software engineering, where I can
              help organizations protect their digital assets while creating innovative solutions.
            </p>
            <div className="pt-4">
              <Link href="#experience">
                <Button className="bg-green-500 hover:bg-green-600 text-black">
                  View Experience <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg blur opacity-25"></div>
            <HackerTerminal />
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 border-l-4 border-green-500 pl-4">Education</h2>
          <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
            <h3 className="text-xl font-bold text-green-500 mb-2">North-West University, South Africa</h3>
            <p className="text-gray-400 mb-4">BSc in Information Technology – Expected Dec 2025</p>
            <h4 className="text-lg font-semibold text-gray-300 mb-2">Key Modules & Majors:</h4>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>IT Development</li>
              <li>Artificial Intelligence (AI)</li>
              <li>Data Structures</li>
              <li>Systems Design and Analysis</li>
              <li>Web & Mobile Development</li>
              <li>Statistics</li>
              <li>Discrete Mathematics</li>
              <li>Information Security</li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-300 mb-2">Final Year Project:</h4>
              <p className="text-gray-300">
                <span className="font-bold text-green-500">Integrated Cyber-Software Solutions Initiative</span> –
                Focused on delivering secure system solutions that work for both cybersecurity and software development.
              </p>
            </div>
          </div>
          {/* Achievements */}
          <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors mt-8">
            <h3 className="text-xl font-bold text-green-500 mb-4">Achievements & Leadership</h3>
            <div className="flex items-start gap-2 text-gray-300">
              <span className="text-green-500 mt-1">•</span>
              <div>
                <span className="font-semibold">RCL (Representative Council of Learners)</span> - Public Relations
                Officer
                <p className="text-gray-400 text-sm mt-1">
                  Leadership role representing student interests and communications
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 text-gray-300 mt-2">
              <span className="text-green-500 mt-1">•</span>
              <div>
                <span className="font-semibold">Golden Key International Honour Society</span> (Top 15%)
                <p className="text-gray-400 text-sm mt-1">Recognized for academic excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 border-l-4 border-green-500 pl-4">Professional Experience</h2>
          <div className="space-y-8">
            {/* Student Assistant Experience */}
            <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-green-500">Student Assistant - IT Support</h3>
                  <p className="text-gray-400">North-West University | Vanderbijlpark, Gauteng</p>
                </div>
                <div className="text-gray-500 text-sm mt-2 md:mt-0">Serving 150+ Students</div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Supported 150+ students with basic IT issues and troubleshooting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Assisted with software updates, hardware upgrades, and system setups
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Configured workstations and ensured network connectivity
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Provided clear technical support to non-technical users
                </li>
              </ul>
            </div>

          

      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 border-l-4 border-green-500 pl-4">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <AnimatedSkillCard
              icon={<Shield className="h-10 w-10 text-green-500" />}
              title="IT Support & Troubleshooting"
              description="Installation, configuration, troubleshooting, and updating of operating systems and applications."
            />
            <AnimatedSkillCard
              icon={<Lock className="h-10 w-10 text-green-500" />}
              title="Cybersecurity Fundamentals"
              description="Network vulnerabilities, threat detection, privacy and data confidentiality, cyber best practices."
            />
            <AnimatedSkillCard
              icon={<Code className="h-10 w-10 text-green-500" />}
              title="Programming Languages"
              description="Proficient in SQL, Python, HTML, React, C++, Java, and C# for various development projects."
            />
            <AnimatedSkillCard
              icon={<Server className="h-10 w-10 text-green-500" />}
              title="Network Configuration"
              description="Workstation configuration, network connectivity setup, and system administration."
            />
            <AnimatedSkillCard
              icon={<Database className="h-10 w-10 text-green-500" />}
              title="Microsoft Office Suite"
              description="Advanced proficiency in Word, Excel, PowerPoint for documentation and presentations."
            />
            <AnimatedSkillCard
              icon={<Zap className="h-10 w-10 text-green-500" />}
              title="Technical Communication"
              description="Effectively communicating with end-users and non-technical staff for support solutions."
            />
          </div>

          <h3 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <h4 className="text-lg font-semibold text-blue-500 mb-4">Communication & Leadership</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Excellent communication and interpersonal skills
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Effective teamwork and collaboration abilities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Leadership experience through RCL position
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <h4 className="text-lg font-semibold text-blue-500 mb-4">Professional Skills</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Strong attention to detail and organizational skills
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Problem-solving abilities and analytical thinking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Time management and task prioritization
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Proactive and eager to learn new technologies
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-8 mt-12 border-l-4 border-purple-500 pl-4">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition-colors">
              <h4 className="text-lg font-semibold text-purple-500 mb-2">
                Google Cybersecurity Professional Certificate
              </h4>
              <p className="text-gray-400 text-sm">Administered by Coursera</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition-colors">
              <h4 className="text-lg font-semibold text-purple-500 mb-2">Google Technical Support Fundamentals</h4>
              <p className="text-gray-400 text-sm">Professional Certificate</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-8 mt-12 border-l-4 border-yellow-500 pl-4">Languages</h3>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-yellow-500 transition-colors">
            <div className="flex flex-wrap gap-4">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">English</span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">isiZulu</span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">Xitsonga</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="container mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-green-500 pl-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {githubProjects.length > 0 ? (
            githubProjects.map((project) => (
              <ProjectCard
  key={project.link}
  title={project.title}
  description={project.description}
  tags={project.tags}
  image={`/images/${project.title}.jpeg`} // or project.name if you have that
  link={project.link}
/>

            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              Failed to load projects from GitHub. Please check your internet connection or try again later.
            </p>
          )}
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-green-500 pl-4">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                I'm always open to discussing new projects, job opportunities, or collaborations.
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
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <User className="h-5 w-5 text-purple-500" />
                  </div>
                  <span className="text-gray-300">FSolution.-Dev</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Github className="h-5 w-5 text-orange-500" />
                  </div>
                  <a
                    href="https://github.com/09JESUS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
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

      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} <span className="text-green-500">Forget Nukeri</span>. All rights reserved.
          </p>
          <p className="mt-2 text-sm">Designed and built with security in mind by Forget.</p>
        </div>
      </footer>
      <PortfolioChatbot />
      <InteractiveTerminal />
    </div>
  )
}
