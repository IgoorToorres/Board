import { GetIssue } from "@/http/get-issue"
import { Metadata } from "next"

interface IssuePageProps {
  params: Promise<{ id: string }>
}

export const generateMetadata = async ({
  params,
}: IssuePageProps): Promise<Metadata> => {
  const { id } = await params
  const issue = await GetIssue({ id })
  return {
    title: `issue ${issue.issueNumber}`,
  }
}

export default async function IssuePage({ params }: IssuePageProps) {
  const { id } = await params
  const issue = await GetIssue({ id })
  return (
    <div>
      <pre>{JSON.stringify(issue, null, 2)}</pre>
    </div>
  )
}
