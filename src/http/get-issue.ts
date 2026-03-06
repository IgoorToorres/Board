import { IssueSchema } from "@/api/routes/get-issue"
import { clientEnv } from "@/env"

interface GetIssueProps {
  id: string
}

export async function GetIssue({ id }: GetIssueProps) {
  "use cache"
  const url = new URL(`/api/issues/${id}`, clientEnv.NEXT_PUBLIC_API_URL)

  const response = await fetch(url)
  const data = await response.json()

  return IssueSchema.parse(data)
}
