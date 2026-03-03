import Button from "@/components/button"
import { Card } from "@/components/card"
import { Section } from "@/components/section"
import { ListIssues } from "@/http/list-issues"
import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react"
import type { Metadata } from "next"

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
      <div />

      <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">
        <Section.Root>
          <Section.Header>
            <Section.Title>
              <ArchiveIcon className="size-3" />
              BackLog
            </Section.Title>

            <Section.IssueCount>{issues.backlog.length}</Section.IssueCount>
          </Section.Header>

          <Section.Content>
            {issues.backlog.length === 0 ? (
              <div className="flex items-center justify-center py-8 text-center">
                <p className="text-sm text-navy-300">
                  No issues matching yout filters
                </p>
              </div>
            ) : (
              issues.backlog.map((issue) => {
                return (
                  <Card.Root href={`/issues/${issue.id}`} key={issue.id}>
                    <Card.Header>
                      <Card.Number>{issue.issueNumber}</Card.Number>
                      <Card.Title>{issue.title}</Card.Title>
                    </Card.Header>
                    <Card.Footer>
                      <Button>
                        <ThumbsUpIcon className="size-3" />
                        <span className="text-sm">12</span>
                      </Button>

                      <Button>
                        <MessageCircleIcon className="size-3" />
                        <span className="text-sm">6</span>
                      </Button>
                    </Card.Footer>
                  </Card.Root>
                )
              })
            )}
          </Section.Content>
        </Section.Root>

        <Section.Root>
          <Section.Header>
            <Section.Title>
              <ArchiveIcon className="size-3" />
              to Do
            </Section.Title>

            <Section.IssueCount>{issues.todo.length}</Section.IssueCount>
          </Section.Header>

          <Section.Content>
            {issues.todo.length === 0 ? (
              <div className="flex items-center justify-center py-8 text-center">
                <p className="text-sm text-navy-300">
                  No issues matching yout filters
                </p>
              </div>
            ) : (
              issues.todo.map((issue) => {
                return (
                  <Card.Root href={`/issues/${issue.id}`} key={issue.id}>
                    <Card.Header>
                      <Card.Number>{issue.issueNumber}</Card.Number>
                      <Card.Title>{issue.title}</Card.Title>
                    </Card.Header>
                    <Card.Footer>
                      <Button>
                        <ThumbsUpIcon className="size-3" />
                        <span className="text-sm">12</span>
                      </Button>

                      <Button>
                        <MessageCircleIcon className="size-3" />
                        <span className="text-sm">6</span>
                      </Button>
                    </Card.Footer>
                  </Card.Root>
                )
              })
            )}
          </Section.Content>
        </Section.Root>

        <Section.Root>
          <Section.Header>
            <Section.Title>
              <ArchiveIcon className="size-3" />
              In Progress
            </Section.Title>

            <Section.IssueCount>{issues.in_progress.length}</Section.IssueCount>
          </Section.Header>

          <Section.Content>
            {issues.in_progress.length === 0 ? (
              <div className="flex items-center justify-center py-8 text-center">
                <p className="text-sm text-navy-300">
                  No issues matching yout filters
                </p>
              </div>
            ) : (
              issues.in_progress.map((issue) => {
                return (
                  <Card.Root href={`/issues/${issue.id}`} key={issue.id}>
                    <Card.Header>
                      <Card.Number>{issue.issueNumber}</Card.Number>
                      <Card.Title>{issue.title}</Card.Title>
                    </Card.Header>
                    <Card.Footer>
                      <Button>
                        <ThumbsUpIcon className="size-3" />
                        <span className="text-sm">12</span>
                      </Button>

                      <Button>
                        <MessageCircleIcon className="size-3" />
                        <span className="text-sm">6</span>
                      </Button>
                    </Card.Footer>
                  </Card.Root>
                )
              })
            )}
          </Section.Content>
        </Section.Root>

        <Section.Root>
          <Section.Header>
            <Section.Title>
              <ArchiveIcon className="size-3" />
              Done
            </Section.Title>

            <Section.IssueCount>{issues.done.length}</Section.IssueCount>
          </Section.Header>

          <Section.Content>
            {issues.done.length === 0 ? (
              <div className="flex items-center justify-center py-8 text-center">
                <p className="text-sm text-navy-300">
                  No issues matching yout filters
                </p>
              </div>
            ) : (
              issues.done.map((issue) => {
                return (
                  <Card.Root href={`/issues/${issue.id}`} key={issue.id}>
                    <Card.Header>
                      <Card.Number>{issue.issueNumber}</Card.Number>
                      <Card.Title>{issue.title}</Card.Title>
                    </Card.Header>
                    <Card.Footer>
                      <Button>
                        <ThumbsUpIcon className="size-3" />
                        <span className="text-sm">12</span>
                      </Button>

                      <Button>
                        <MessageCircleIcon className="size-3" />
                        <span className="text-sm">6</span>
                      </Button>
                    </Card.Footer>
                  </Card.Root>
                )
              })
            )}
          </Section.Content>
        </Section.Root>
      </main>
    </div>
  )
}
