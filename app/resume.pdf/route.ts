import { NextResponse } from "next/server"
import { join } from "path"
import { readFile } from "fs/promises"

export async function GET() {
  try {
    const filePath = join(process.cwd(), "public", "ForgetNukeriCV.pdf")
    const fileBuffer = await readFile(filePath)

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Forget_Cybersecurity_Resume.pdf"',
      },
    })
  } catch (error) {
    return new NextResponse("Resume file not found.", { status: 404 })
  }
}
