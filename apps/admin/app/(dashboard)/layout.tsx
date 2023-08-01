import type { Metadata } from "next"

import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: {
    template: "Dashboard - %s",
    default: "Dashboard"
  }
}

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-2 sm:px-4">{children}</div>
    </main>
  )
}
