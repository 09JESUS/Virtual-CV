import { NextResponse } from "next/server"

interface GitHubRepo {
  name: string
  description: string | null
  html_url: string
  language: string | null
  topics?: string[]
  fork: boolean
  homepage?: string | null // 👈 GitHub repo "Website" field
}
interface PortfolioProject {
  title: string;
  description: string;
  tags: string[];
  link: string;       // GitHub link
  image: string;      // Cover image
  website?: string | null; // Website link
}

export async function GET() {
  try {
    const response = await fetch("https://api.github.com/users/09JESUS/repos", {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json",
      },
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch repositories" }, { status: 500 });
    }

    const data: GitHubRepo[] = await response.json();

    const projects: PortfolioProject[] = data
      .filter(repo => !repo.fork)
      .map(repo => {
        const imageUrl = `https://raw.githubusercontent.com/09JESUS/${repo.name}/main/Cover.jpeg`;

        return {
          title: repo.name,
          description: repo.description || "No description provided.",
          tags: repo.topics?.length ? repo.topics : repo.language ? [repo.language] : [],
          link: repo.html_url,             // GitHub repo link
          image: imageUrl,
          website: repo.homepage || null,  // Live demo link
        };
      });

    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
