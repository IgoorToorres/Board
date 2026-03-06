import { Loader2 } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Board",
}

export default async function BoardLoaging() {
  return (
    <div className="flex h-full items-center justify-center">
      <Loader2 size={50} className="animate-spin" />
    </div>
  )
}
