"use client"

import { authClient } from "@/lib/auth-client"
import { Loader2, LogInIcon } from "lucide-react"

export default function UserButton() {
  const { data: session, isPending } = authClient.useSession()

  async function handleSignIn() {
    await authClient.signIn.social({ provider: "github", callbackURL: "/" })
  }
  return (
    <>
      {isPending ? (
        <div className="size-8 rounded-full bg-navy-700 border border-navy-500 flex items-center justify-center">
          <Loader2 className="size-3.5 text-navy-200 animate-spin" />
        </div>
      ) : session?.user ? (
        <button
          type="button"
          className="size-8 rounded-full overflow-hidden"
          onClick={handleSignIn}
        >
          {/** biome-ignore lint/performance/noImgElement: Imagem ja optimizada */}
          <img
            src={session.user.image ?? ""}
            alt={`avatar-usuario-${session.user.name}`}
            className="size-8 rounded-full"
          />
        </button>
      ) : (
        <button
          type="button"
          className="size-8 rounded-full bg-navy-700 border border-navy-500 flex items-center justify-center hover:bg-navy-600 transition-colors duration-150 cursor-pointer"
          onClick={handleSignIn}
        >
          <LogInIcon className="size-3.5 text-navy-200" />
        </button>
      )}
    </>
  )
}
