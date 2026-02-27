import Input from "@/components/input"
import { LogInIcon, SearchIcon } from "lucide-react"

export default function Header() {
  return (
    <div className="max-w-225 mx-auto w-full flex justify-between items-center">
      <div className="space-y-1">
        <h1 className="font-semibold text-xl">Product RoadMap</h1>
        <p className="text-sm text-navy-100">
          Follow the development progress of our entire platform
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <SearchIcon className="size-4 text-navy-200 absolute top-1/2 -translate-y-1/2 left-2.5 pointer-events-none" />
          <Input
            placeholder="search for features..."
            type="text"
            className="w-67.5 pl-8"
          />
        </div>
        <button
          type="button"
          className="size-8 rounded-full bg-navy-700 border border-navy-500 flex items-center justify-center hover:bg-navy-600 transition-colors duration-150 cursor-pointer"
        >
          <LogInIcon className="size-3.5 text-navy-200" />
        </button>
      </div>
    </div>
  )
}
