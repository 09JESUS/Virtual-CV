import { NextResponse } from "next/server"
/*
export async function GET() {
  try {
    // Import jsPDF with proper typing
    const { jsPDF } = await import("jspdf")

    // Create new PDF document
    const doc = new jsPDF()

    // Set font
    doc.setFont("helvetica")

    // Header - Name and Contact Info
    doc.setFontSize(16)
    doc.setFont("helvetica", "bold")
    doc.text("Forget Nukeri", 20, 25)

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.text("+27 76 285 2630 | portfolio | forgetnukeri585@gmail.com", 20, 32)
    doc.text("Gauteng", 20, 38)

    let yPosition = 50

    // EDUCATION Section
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("EDUCATION", 20, yPosition)
    yPosition += 12

    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    doc.text("North-West University | Vanderbijlpark | Gauteng", 20, yPosition)
    yPosition += 8
    doc.setFont("helvetica", "normal")
    doc.text("• BSc in Information Technology – Expected Dec 2025", 20, yPosition)
    yPosition += 6
    doc.text("• Modules: IT Development, AI, Data Structures, Systems Design and Analysis,", 20, yPosition)
    yPosition += 6
    doc.text("  Web & Mobile Dev, Statistics, Discrete Mathematics, Information Security", 20, yPosition)
    yPosition += 6
    doc.text("• Final Year Project: Integrated Cyber-Software Solutions Initiative", 20, yPosition)
    yPosition += 12 // Adjust yPosition for the next section

    doc.setFont("helvetica", "bold")
    doc.text("Google | Administered by Coursera", 20, yPosition)
    yPosition += 8
    doc.setFont("helvetica", "normal")
    doc.text("• Google Technical Support Fundamentals Professional Certificate", 20, yPosition)
    yPosition += 6
    doc.text("• Google Cybersecurity Professional Certificate", 20, yPosition)
    yPosition += 12

    doc.setFont("helvetica", "bold")
    doc.text("Achievements", 20, yPosition)
    yPosition += 6
    doc.setFont("helvetica", "normal")
    doc.text("• RCL (Representative Council of Learners) – Public Relations Officer", 20, yPosition)
    yPosition += 6
    doc.text("• Golden Key International Honour Society (Top 15%)", 20, yPosition) // Added Golden Key
    yPosition += 15

    // PROFESSIONAL EXPERIENCE Section
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("PROFESSIONAL EXPERIENCE", 20, yPosition)
    yPosition += 12

    // Student Assistant Experience
    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    doc.text("Student Assistant | Vanderbijlpark | Gauteng", 20, yPosition)
    yPosition += 8
    doc.text("Student Assistant – IT Support (Serving 150+ Students)", 20, yPosition)
    yPosition += 10

    doc.setFont("helvetica", "normal")
    doc.text("• Supported 150+ students with basic IT issues and troubleshooting", 20, yPosition)
    yPosition += 6
    doc.text("• Assisted with software updates, hardware upgrades, and system setups.", 20, yPosition)
    yPosition += 6
    doc.text("• Configured workstations and ensured network connectivity", 20, yPosition)
    yPosition += 6
    doc.text("• Provided clear technical support to non-technical users", 20, yPosition)
    yPosition += 10

    // Residential Coordinator Experience
    doc.setFont("helvetica", "bold")
    doc.text("Vaal Student Housing (VSH) | Vanderbijlpark, Gauteng", 20, yPosition)
    yPosition += 6
    doc.text("Residential Coordinator", 20, yPosition)
    yPosition += 10

    doc.setFont("helvetica", "normal")
    doc.text("• Resolved technical issues reported by students in a timely manner.", 20, yPosition)
    yPosition += 6
    doc.text("• Served as the primary point of contact for 160 students in the residence,", 20, yPosition)
    yPosition += 6
    doc.text("  addressing their concerns, questions, and needs.", 20, yPosition)
    yPosition += 6
    doc.text("• Manage the day-to-day operations of the residence hall, including room", 20, yPosition)
    yPosition += 6
    doc.text("  assignments, check-ins, and check-outs.", 20, yPosition)
    yPosition += 6
    doc.text("• Enforced residence hall policies and procedures", 20, yPosition)
    yPosition += 15

    // Check if we need a new page
    if (yPosition > 220) {
      doc.addPage()
      yPosition = 25
    }

    // SKILLS Section
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("SKILLS", 20, yPosition)
    yPosition += 12

    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    doc.text("Technical Skills", 20, yPosition)
    yPosition += 8

    doc.setFont("helvetica", "normal")
    doc.text("• IT Support: Installation, configuration, Troubleshooting, updating of operating", 20, yPosition)
    yPosition += 6
    doc.text("  systems and applications.", 20, yPosition)
    yPosition += 6
    doc.text("• Cybersecurity Basics: Cybersecurity · network vulnerabilities · Threat", 20, yPosition)
    yPosition += 6
    doc.text("  Detection · privacy and data confidentiality · cyber best practices", 20, yPosition)
    yPosition += 6
    doc.text("• Programming languages: SQL, Python, HTML, React, C++, Java, C#", 20, yPosition)
    yPosition += 6
    doc.text("• Microsoft Office Suite: Word, Excel, PowerPoint", 20, yPosition)
    yPosition += 12

    doc.setFont("helvetica", "bold")
    doc.text("Core Competencies", 20, yPosition)
    yPosition += 8

    doc.setFont("helvetica", "normal")
    doc.text("• Excellent communication and interpersonal skills, enabling effective", 20, yPosition)
    yPosition += 6
    doc.text("  teamwork.", 20, yPosition)
    yPosition += 6
    doc.text("• Strong attention to detail and organizational skills.", 20, yPosition)
    yPosition += 6
    doc.text("• Communicating effectively with end-users and non-technical staff.", 20, yPosition)
    yPosition += 6
    doc.text("• Problem-solving abilities", 20, yPosition)
    yPosition += 6
    doc.text("• Proactive and eager to learn new technologies.", 20, yPosition)
    yPosition += 6
    doc.text("• Time management and prioritization to handle multiple tasks.", 20, yPosition)
    yPosition += 15

    // ADDITIONAL INFORMATION Section
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("ADDITIONAL INFORMATION", 20, yPosition)
    yPosition += 10

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.text("Languages: English, isiZulu, Xitsonga", 20, yPosition)
    yPosition += 15

    // REFERENCES Section
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("REFERENCES", 20, yPosition)
    yPosition += 10

    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    doc.text("Vaal Student Housing Manager:", 20, yPosition)
    yPosition += 6
    doc.text("Mrs Sandra", 20, yPosition)
    yPosition += 6
    doc.setFont("helvetica", "normal")
    doc.text("Email: info@vaalstudenthousing.co.za", 20, yPosition)
    yPosition += 6
    doc.text("Cell: (071) 887 5619", 20, yPosition)

    // Generate PDF as ArrayBuffer (more reliable method)
    const pdfArrayBuffer = doc.output("arraybuffer")

    return new NextResponse(pdfArrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Forget_Nukeri_Resume.pdf"',
        "Content-Length": pdfArrayBuffer.byteLength.toString(),
      },
    })
  } catch (error) {
    console.error("Error generating PDF:", error)

    // Return a simple text-based PDF as fallback
    return new NextResponse(
      `Error generating PDF resume. Please contact forgetnukeri585@gmail.com for a copy of the resume.`,
      {
        status: 500,
        headers: {
          "Content-Type": "text/plain",
        },
      },
    )
  }
}*/
