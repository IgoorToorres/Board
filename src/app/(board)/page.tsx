import { ListIssues } from "@/http/list-issues"
import type { Metadata } from "next"
import { BoardContent } from "./board-content"

export const metadata: Metadata = {
  title: "Board",
}

type BoardProps = {
  searchParams: Promise<{ q?: string }>
}

export default async function Board({ searchParams }: BoardProps) {
  const { q } = await searchParams
  const issues = await ListIssues({ search: q })

  return (
    <div className="max-w-405 w-full mx-auto p-10 flex flex-col gap-8 h-dvh">
      <BoardContent issues={issues} />
    </div>
  )
}
