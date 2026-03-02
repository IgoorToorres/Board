"use client"

import Input from "@/components/input"
import { SearchIcon } from "lucide-react"
import { debounce, parseAsString, useQueryState } from "nuqs"
import type { ChangeEvent } from "react"

export default function SearchInput() {
  const [search, setSearch] = useQueryState("q", parseAsString.withDefault(""))

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value, {
      limitUrlUpdates: event.target.value !== "" ? debounce(500) : undefined,
    })
  }

  return (
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
  )
}
