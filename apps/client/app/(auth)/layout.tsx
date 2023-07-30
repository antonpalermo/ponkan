import { ReactNode } from "react"

export interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      {children}
    </div>
  )
}
