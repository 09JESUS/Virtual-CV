"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

export function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Forget's portfolio assistant. Ask me anything about his background, skills, projects, or experience! Try asking: 'What are his skills?', 'Tell me about his projects', or 'What is his education background?'",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    // Enhanced pattern matching for more flexible queries

    // Education and Background
    if (
      message.includes("education") ||
      message.includes("university") ||
      message.includes("nwu") ||
      message.includes("student") ||
      message.includes("study") ||
      message.includes("degree") ||
      message.includes("school") ||
      message.includes("academic") ||
      message.includes("certification") ||
      message.includes("certificate") ||
      message.includes("final year project")
    ) {
      return "Forget is a final year Information Technology student at North-West University (NWU), specializing in cybersecurity and software development. He is expected to graduate in Dec 2025. Key modules include IT Development, AI, Data Structures, Systems Design and Analysis, Web & Mobile Dev, Statistics, Discrete Mathematics, and Information Security. His **Final Year Project** is the **Integrated Cyber-Software Solutions Initiative**, focused on delivering secure system solutions that work for both cybersecurity and software development. He also holds professional certifications including:\n\n🎓 **Google Cybersecurity Professional Certificate** (Coursera)\n🛠️ **Google Technical Support Fundamentals Professional Certificate**\n🏆 **RCL Public Relations Officer** - Leadership achievement\n🌟 **Golden Key International Honour Society** (Top 15%) - Academic excellence\n\nHe's passionate about creating secure, efficient solutions."
    }

    // Specific certifications
    if (message.includes("google") || message.includes("coursera")) {
      return "Forget holds two important Google certifications:\n\n🔐 **Google Cybersecurity Professional Certificate** (Coursera) - Comprehensive training in cybersecurity fundamentals, network security, threat detection, and security best practices.\n\n🛠️ **Google Technical Support Fundamentals Professional Certificate** - Professional training in IT troubleshooting, customer service, hardware and software support.\n\nThese certifications complement his academic studies and demonstrate his commitment to professional development in cybersecurity and IT support."
    }

    // Skills and Technologies
    if (
      message.includes("skill") ||
      message.includes("technology") ||
      message.includes("programming") ||
      message.includes("language") ||
      message.includes("tech") ||
      message.includes("code") ||
      message.includes("develop") ||
      message.includes("what can he do") ||
      message.includes("abilities") ||
      message.includes("expertise")
    ) {
      return "Forget's technical skills include:\n• Python Development (primary language)\n• Penetration Testing & Network Security\n• Machine Learning & Data Analysis\n• Web Development (HTML, CSS, JavaScript, TypeScript)\n• Java Programming\n• Data Security & Encryption (AES-256)\n• Cybersecurity Tools & Frameworks\n• Database Management\n• Software Engineering Principles"
    }

    // Specific programming languages
    if (message.includes("python")) {
      return "Python is Forget's primary programming language. He uses it extensively for cybersecurity tools, machine learning projects, fraud detection systems, automation scripts, and data analysis. Many of his GitHub projects are built with Python."
    }

    if (message.includes("java")) {
      return "Forget has experience with Java programming, particularly through his Cognify internship projects. He's worked on various Java-based applications and understands object-oriented programming principles."
    }

    if (message.includes("javascript") || message.includes("typescript") || message.includes("web")) {
      return "Forget has web development skills in HTML, CSS, JavaScript, and TypeScript. He's built several web applications including TechCare Live, portfolio websites, and various frontend projects."
    }

    // Projects - General
    if (
      message.includes("project") ||
      message.includes("github") ||
      message.includes("work") ||
      message.includes("portfolio") ||
      message.includes("build") ||
      message.includes("create") ||
      message.includes("develop") ||
      message.includes("what has he made") ||
      message.includes("show me") ||
      message.includes("final year project") ||
      message.includes("password manager")
    ) {
      return "Forget has developed several impressive projects. You can view them all on his GitHub: github.com/09JESUS. Some highlights include:\n\n🔐 **Final Year Project: Integrated Cyber-Software Solutions Initiative** – Focused on delivering secure system solutions that work for both cybersecurity and software development.\n💳 **Credit Card Fraud Detection** - ML system for detecting fraudulent transactions\n📰 **Fake News Detection** - NLP-powered misinformation detector\n💰 **FSolution-AI-pay** - Secure payment platform with AI fraud prevention\n🏥 **Health-NWU-Chatbot** - Healthcare chatbot with secure data handling\n🎓 **Student Navigator** - Academic journey management system\n🛠️ **TechCare Live** - Tech support platform"
    }

    // Specific projects
    if (message.includes("securenest") || message.includes("password")) {
      return "SecureNest is Forget's password manager project built with Python. It features AES-256 encryption for maximum security and stores passwords safely in a local vault file. This project demonstrates his understanding of cryptography and secure data storage practices."
    }

    if (message.includes("final year project") || message.includes("integrated cyber-software solutions initiative")) {
      return "Forget's Final Year Project is the **Integrated Cyber-Software Solutions Initiative**. This project focuses on delivering secure system solutions that work for both cybersecurity and software development. It demonstrates his advanced skills in building robust, real-world security solutions that integrate seamlessly with software systems."
    }

    if (message.includes("fraud") || message.includes("credit card")) {
      return "The Credit Card Fraud Detection project uses advanced machine learning algorithms to identify fraudulent transactions with high accuracy. It employs anomaly detection techniques and demonstrates Forget's skills in both cybersecurity and data science."
    }

    if (message.includes("fake news") || message.includes("news")) {
      return "The Fake News Detection system uses Natural Language Processing (NLP) to analyze news content and identify misinformation. This project showcases Forget's ability to apply AI techniques to solve real-world problems and combat digital misinformation."
    }

    if (message.includes("chatbot") || message.includes("health")) {
      return "The Health-NWU-Chatbot is a secure healthcare chatbot with HIPAA-compliant data handling and encrypted communications. It demonstrates Forget's ability to build AI-powered solutions while maintaining strict security and privacy standards."
    }

    // Contact and Communication
    if (
      message.includes("contact") ||
      message.includes("email") ||
      message.includes("reach") ||
      message.includes("hire") ||
      message.includes("connect") ||
      message.includes("talk") ||
      message.includes("message")
    ) {
      return "You can reach Forget through:\n📧 Email: forgetnukeri585@gmail.com\n📞 Phone: 076 285 2630\n💼 LinkedIn: Available in the contact section\n🐙 GitHub: github.com/09JESUS\n\nFeel free to use the contact form on this portfolio, or reach out directly via email for opportunities, collaborations, or questions!"
    }

    // Experience and Internships
    if (
      message.includes("experience") ||
      message.includes("internship") ||
      message.includes("work") ||
      message.includes("job") ||
      message.includes("cognify") ||
      message.includes("professional") ||
      message.includes("residential coordinator") ||
      message.includes("it support")
    ) {
      return "Forget has gained practical experience through:\n• **Student Assistant - IT Support** at NWU (Supported 150+ students)\n• **Residential Coordinator** at Vaal Student Housing (Managed 160 students, resolved technical issues)\n• Cognify Internship Projects (Java development)\n• Multiple personal cybersecurity projects\n• Machine learning and AI implementations\n• Web development projects\n• Security tool development\n• Academic projects at NWU\n• Leadership role as RCL Public Relations Officer\n\nHis hands-on experience spans cybersecurity, software development, and emerging technologies."
    }

    // Goals and Career
    if (
      message.includes("goal") ||
      message.includes("career") ||
      message.includes("future") ||
      message.includes("plan") ||
      message.includes("want") ||
      message.includes("aspir") ||
      message.includes("dream") ||
      message.includes("ambition")
    ) {
      return "Forget's career goal is to build a successful career at the intersection of cybersecurity and software engineering. He aims to help organizations protect their digital assets while creating innovative, secure solutions. He's particularly interested in roles that combine security expertise with software development skills."
    }

    // Security and Cybersecurity
    if (
      message.includes("security") ||
      message.includes("cybersecurity") ||
      message.includes("penetration") ||
      message.includes("hacking") ||
      message.includes("vulnerability") ||
      message.includes("encryption") ||
      message.includes("protect")
    ) {
      return "Forget specializes in cybersecurity with expertise in:\n• Penetration Testing & Vulnerability Assessment\n• Secure Coding Practices\n• Data Encryption (AES-256)\n• Network Security\n• Fraud Detection Systems\n• Security Architecture\n• Threat Analysis\n\nHe's developed several security-focused projects including password managers, fraud detection systems, and secure communication platforms, including his Final Year Project: Integrated Cyber-Software Solutions Initiative."
    }

    // Machine Learning and AI
    if (
      message.includes("machine learning") ||
      message.includes("ai") ||
      message.includes("artificial intelligence") ||
      message.includes("ml") ||
      message.includes("data science") ||
      message.includes("algorithm")
    ) {
      return "Forget has strong machine learning capabilities, demonstrated through projects like:\n• Credit Card Fraud Detection using anomaly detection\n• Fake News Detection with NLP\n• AI-powered payment fraud prevention\n• Data analysis and pattern recognition\n\nHe combines ML techniques with cybersecurity to create intelligent security solutions."
    }

    // Personal qualities
    if (
      message.includes("personality") ||
      message.includes("character") ||
      message.includes("person") ||
      message.includes("who is") ||
      message.includes("about him") ||
      message.includes("describe")
    ) {
      return "Forget is a passionate and dedicated IT student with a strong focus on cybersecurity and software development. He's known for his problem-solving skills, attention to security details, and ability to create practical solutions. He's always eager to learn new technologies and apply them to real-world challenges."
    }

    // Languages and communication
    if (
      message.includes("language") ||
      message.includes("speak") ||
      message.includes("fluent") ||
      message.includes("communication") ||
      message.includes("multilingual")
    ) {
      return "Forget is multilingual with strong communication capabilities:\n\n🗣️ **English** - Fluent (Professional Working Proficiency)\n🗣️ **isiZulu** - Native Speaker (Full Professional Proficiency)\n🗣️ **Xitsonga** - Native Speaker (Full Professional Proficiency)\n\nHis multilingual abilities enable him to provide technical support to diverse user groups and communicate effectively across different cultural contexts, which has been valuable in his student assistant and residential coordinator roles."
    }

    // Achievements and leadership
    if (
      message.includes("achievement") ||
      message.includes("leadership") ||
      message.includes("rcl") ||
      message.includes("representative") ||
      message.includes("award") ||
      message.includes("golden key")
    ) {
      return "Forget has demonstrated significant achievements and leadership:\n\n🏆 **RCL (Representative Council of Learners) - Public Relations Officer**: A key leadership role representing student interests and managing communications.\n\n🌟 **Golden Key International Honour Society (Top 15%)**: Recognized for outstanding academic achievement, placing him among the top 15% of university students globally.\n\nThese accomplishments, combined with his technical roles supporting 150+ students as IT Assistant and managing 160 students as Residential Coordinator, showcase his ability to handle responsibility and work effectively with diverse groups."
    }

    // Help and commands
    if (
      message.includes("help") ||
      message.includes("what can you") ||
      message.includes("commands") ||
      message.includes("how") ||
      message.includes("guide")
    ) {
      return "I can help you learn about Forget! Try asking:\n• 'What are his skills?' or 'What technologies does he know?'\n• 'Tell me about his projects' or 'Show me his work'\n• 'What is his education background?'\n• 'How can I contact him?'\n• 'What are his career goals?'\n• 'What cybersecurity experience does he have?'\n• 'Tell me about his Python projects'\n\nJust ask naturally - I'll understand!"
    }

    // Default responses for unmatched queries
    const defaultResponses = [
      "That's an interesting question! Could you be more specific? I can tell you about Forget's education, skills, projects, experience, or career goals.",
      "I'd be happy to help! Try asking about his technical skills, cybersecurity projects, education at NWU, or how to contact him.",
      "I can provide information about Forget's background, projects, skills, or experience. What would you like to know specifically?",
      "Feel free to ask about his programming languages, cybersecurity expertise, GitHub projects, or academic background at NWU!",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay - reduced for faster response
    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(inputValue),
          isBot: true,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      800 + Math.random() * 500, // Reduced delay for faster responses
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.5, duration: 0.3 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg relative"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
          {!isOpen && <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>}
        </Button>
      </motion.div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 300, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 300, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-80 h-96"
          >
            <Card className="bg-black border border-blue-500 shadow-2xl h-full flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between pb-3 border-b border-gray-800">
                <CardTitle className="text-blue-500 font-mono text-lg flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  Portfolio Assistant
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6 text-gray-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-4 overflow-hidden">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                      <div
                        className={`max-w-[80%] p-2 rounded-lg ${
                          message.isBot ? "bg-gray-800 text-gray-200" : "bg-blue-500 text-white"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {message.isBot && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                          {!message.isBot && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-800 text-gray-200 p-2 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Bot className="h-4 w-4" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about Forget..."
                    className="bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    className="bg-blue-500 hover:bg-blue-600"
                    disabled={!inputValue.trim() || isTyping}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
