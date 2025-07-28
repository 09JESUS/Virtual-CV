import { NextResponse } from "next/server"

interface GitHubRepo {
  name: string
  description: string | null
  html_url: string
  language: string | null
  topics?: string[]
  fork: boolean
}

interface PortfolioProject {
  title: string
  description: string
  tags: string[]
  link: string
}

export async function GET() {
  try {
    const response = await fetch("https://api.github.com/users/09JESUS/repos", {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json", // Needed for topics
      },
      next: {
        revalidate: 60, // Cache for 60 seconds to allow GitHub updates to reflect soon
      },
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch repositories" }, { status: 500 })
    }

    const data: GitHubRepo[] = await response.json()

    const projects: PortfolioProject[] = data
      .filter(repo => !repo.fork)
      .map(repo => ({
        title: repo.name,
        description: repo.description || "No description provided.",
        tags: repo.topics?.length ? repo.topics : repo.language ? [repo.language] : [],
        link: repo.html_url,
      }))

    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
