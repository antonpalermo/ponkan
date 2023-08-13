"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { cn } from "ui"

export default function NavbarLinks() {
  const params = useParams()
  const pathname = usePathname()

  const storeId = params.store_id

  const routes = [
    {
      path: `/overview/${storeId}`,
      label: "Overview",
      isActive: pathname === `/overview/${storeId}`
    },
    {
      path: `/products/${storeId}`,
      label: "Products",
      isActive: pathname === `/products/${storeId}`
    }
  ]

  return (
    <div className="space-x-4">
      {routes.map((link, index) => (
        <Link key={index} href={link.path}>
          <span
            className={cn(
              "hover:text-foreground hover:border-b-muted-foreground py-1 font-medium hover:border-b",
              link.isActive ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  )
}
