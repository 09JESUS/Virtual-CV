import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface SkillCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <Card className="bg-black border border-gray-800 hover:border-green-500 transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-green-500 transition-colors">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}
