"use client"

import Input from "@/components/input"
import { authClient } from "@/lib/auth-client"
import { Loader2, LogInIcon, SearchIcon } from "lucide-react"
import { debounce, parseAsString, useQueryState } from "nuqs"
import type { ChangeEvent } from "react"

export default function Header() {
  const { data: session, isPending } = authClient.useSession()
  const [search, setSearch] = useQueryState("q", parseAsString.withDefault(""))

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value, {
      limitUrlUpdates: event.target.value !== "" ? debounce(500) : undefined,
    })
  }

  async function handleSignIn() {
    await authClient.signIn.social({ provider: "github", callbackURL: "/" })
  }

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
            value={search}
            onChange={handleSearchChange}
          />
        </div>

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
      </div>
    </div>
  )
}
