"use client"

import Input from "@/components/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, MessageCirclePlusIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const createCommentSchema = z.object({
  text: z.string().min(1, "Comment cannot be empty"),
})

type CreateCommentSchema = z.infer<typeof createCommentSchema>

interface IssueCommentProps {
  isAuthenticate: boolean
  onCreateComment: (text: string) => Promise<void>
}

export function IssueCommentForm({
  onCreateComment,
  isAuthenticate,
}: IssueCommentProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateCommentSchema>({
    resolver: zodResolver(createCommentSchema),
  })

  async function handleCreateComment(data: CreateCommentSchema) {
    await onCreateComment(data.text)
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateComment)}
      className="relative w-full"
    >
      <Input
        className="bg-navy-700 h-11 pr-24 w-full"
        disabled={isSubmitting || !isAuthenticate}
        placeholder={
          isAuthenticate ? "Leave a comment..." : "sign in to comment"
        }
        {...register("text")}
      />
      {errors.text && (
        <span className="text-xs text-red-400 mt-1">
          {errors.text?.message}
        </span>
      )}
      <button
        type="submit"
        disabled={isSubmitting || !isAuthenticate}
        className="flex items-center gap-2 text-indigo-400 absolute right-3 top-1/2 -translate-y-1/2 text-xs hover:text-indigo-300 cursor-pointer disabled:opacity-50"
      >
        Publish
        {isSubmitting ? (
          <Loader2 className="size-3 animate-spin" />
        ) : (
          <MessageCirclePlusIcon className="size-3" />
        )}
      </button>
    </form>
  )
}
