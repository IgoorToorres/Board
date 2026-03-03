import { IssuesListResponseSchema } from "@/api/routes/list-issues"

export async function ListIssues() {
  const response = await fetch("http://localhost:3000/api/issues")
  const data = await response.json()

  return IssuesListResponseSchema.parse(data)
}
