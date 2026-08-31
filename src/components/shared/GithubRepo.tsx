"use client"

import * as React from "react"
import { GithubLogo } from "@phosphor-icons/react"
import Link from "next/link"

export function GithubRepo() {
  return (
    <Link
      href="https://github.com/JinMin-Kim-11"
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group flex flex-row  justify-start items-center text-md font-medium transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      data-track="nav_github_repo"
    >
      <GithubLogo size={18} weight="duotone" />
      <span className="sr-only">Github Repo</span>
    </Link>
  )
}
