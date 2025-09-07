import { NextResponse } from "next/server"

interface GitHubRepo {
  name: string
  description: string | null
  html_url: string
  topics?: string[]
  fork: boolean
  homepage?: string | null
  languages_url: string
}

interface PortfolioProject {
  title: string
  description: string
  tags: string[]
  link: string
  image: string
  website?: string | null
}

// List of known frameworks / languages you want to detect from package.json or repo name
const knownFrameworks = [
  "react", "next", "vue", "angular", "svelte",
  "tailwindcss", "node", "express", "django", "flask",
  "ruby-on-rails", "typescript", "javascript", "python", "java"
]

export async function GET() {
  try {
    const response = await fetch("https://api.github.com/users/09JESUS/repos", {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json",
      },
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch repositories" }, { status: 500 })
    }

    const data: GitHubRepo[] = await response.json()

    const projects: PortfolioProject[] = await Promise.all(
      data.filter(repo => !repo.fork).map(async (repo) => {
        // Fetch languages for the repo
        const langRes = await fetch(repo.languages_url)
        const languages = langRes.ok ? Object.keys(await langRes.json()) : []

        // Detect frameworks by checking knownFrameworks in repo name or description
        const frameworks = knownFrameworks.filter(f =>
          (repo.name.toLowerCase() + " " + (repo.description || "").toLowerCase()).includes(f)
        )

        const tags = [
          ...(repo.topics || []), // GitHub topics
          ...languages,            // All languages in repo
          ...frameworks            // Frameworks from repo name/description
        ]

        return {
          title: repo.name,
          description: repo.description || "No description provided.",
          tags,
          link: repo.html_url,
          image: `https://raw.githubusercontent.com/09JESUS/${repo.name}/main/Cover.jpeg`,
          website: repo.homepage || null
        }
      })
    )

    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
