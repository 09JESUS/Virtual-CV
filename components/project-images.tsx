import { CreditCard, Lock, FileText, CreditCardIcon, HeadphonesIcon, MessageSquare } from "lucide-react"

export const ProjectImages = {
  creditCardFraud: {
    icon: <CreditCard className="h-20 w-20 text-green-500" />,
    bgClass: "bg-gradient-to-br from-red-900/20 to-orange-900/20",
  },
  passwordManager: {
    icon: <Lock className="h-20 w-20 text-green-500" />,
    bgClass: "bg-gradient-to-br from-blue-900/20 to-purple-900/20",
  },
  fakeNews: {
    icon: <FileText className="h-20 w-20 text-green-500" />,
    bgClass: "bg-gradient-to-br from-yellow-900/20 to-amber-900/20",
  },
  aiPay: {
    icon: <CreditCardIcon className="h-20 w-20 text-green-500" />,
    bgClass: "bg-gradient-to-br from-green-900/20 to-emerald-900/20",
  },
  techCare: {
    icon: <HeadphonesIcon className="h-20 w-20 text-green-500" />,
    bgClass: "bg-gradient-to-br from-cyan-900/20 to-sky-900/20",
  },
  chatbot: {
    icon: <MessageSquare className="h-20 w-20 text-green-500" />,
    bgClass: "bg-gradient-to-br from-indigo-900/20 to-violet-900/20",
  },
}
