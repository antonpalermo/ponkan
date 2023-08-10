"use client"

import Link from "next/link"

import { UrlObject } from "url"
import { UserButton } from "@clerk/nextjs"
import { HtmlHTMLAttributes } from "react"

import { Button } from "ui"
import StoreSelector from "./store-selector"
import { useParams, usePathname } from "next/navigation"

export type Navigation = {
  label: string
  href: string | UrlObject
}

export const MainLinks: Navigation[] = [
  {
    label: "Overview",
    href: "/overview"
  },
  {
    label: "Products",
    href: "/products"
  },
  {
    label: "Orders",
    href: "/products"
  }
]

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

export function NavLink({ href, label }: Navigation) {
  const { store_id } = useParams()

  return (
    <Button variant="link" asChild>
      <Link href={`${href}/${store_id}`}>{label}</Link>
    </Button>
  )
}

export default function Navbar() {
  return (
    <nav className="w-full py-4">
      <NavbarContainer>
        <div className="inline-flex items-center">
          <StoreSelector />
          {/* Navigation Links */}
          <div className="pl-4">
            {MainLinks.map(link => (
              <NavLink key={link.label} {...link} />
            ))}
          </div>
        </div>

        <UserButton afterSignOutUrl="/" />
      </NavbarContainer>
    </nav>
  )
}
