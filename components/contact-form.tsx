"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        const error = await response.json()
        throw new Error(error.message || "Failed to submit form")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit form",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="bg-black border border-gray-800">
        <CardContent className="p-6 flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
            <Send className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
          <p className="text-gray-400 text-center">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
          <Button className="mt-6 bg-green-500 hover:bg-green-600 text-black" onClick={() => setIsSubmitted(false)}>
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-black border border-gray-800">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                required
                className="bg-gray-900 border-gray-800 focus:border-green-500"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                required
                className="bg-gray-900 border-gray-800 focus:border-green-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-300">
              Subject
            </label>
            <Input
              id="subject"
              placeholder="Subject"
              required
              className="bg-gray-900 border-gray-800 focus:border-green-500"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message"
              rows={5}
              required
              className="bg-gray-900 border-gray-800 focus:border-green-500"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-black" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
                Sending...
              </>
            ) : (
              <>Send Message</>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
