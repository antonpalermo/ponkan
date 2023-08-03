"use client"

import CreateStoreModalDialog from "@/components/create-store-modal"
import { useEffect, useState } from "react"

export interface ModalProviderProps {}

export default function ModalProvider(props: ModalProviderProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <CreateStoreModalDialog />
    </>
  )
}
