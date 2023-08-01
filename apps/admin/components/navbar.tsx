"use client"

import { UserButton } from "@clerk/nextjs"
import { HtmlHTMLAttributes, ReactNode } from "react"

export interface NavbarContainerProps
  extends HtmlHTMLAttributes<HTMLDivElement> {}

export function NavbarContainer({ ...props }: NavbarContainerProps) {
  return (
    <div
      className="container mx-auto inline-flex items-center justify-between px-2 sm:px-4"
      {...props}
    />
  )
}

export default function Navbar() {
  return (
    <nav className="w-full py-4">
      <NavbarContainer>
        <h1>Ponkan</h1>
        <UserButton afterSignOutUrl="/"/>
      </NavbarContainer>
    </nav>
  )
}
