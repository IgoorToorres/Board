import { Section } from "@/components/section"
import { ArchiveIcon } from "lucide-react"

export default function Home() {
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

            <Section.IssueCount>12</Section.IssueCount>
          </Section.Header>

          <Section.Content>
            <div>card1</div>
            <div>card2</div>
            <div>card3</div>
          </Section.Content>
        </Section.Root>
      </main>
    </div>
  )
}
