"use client"

import { useEffect, useState } from "react"
import CreateStoreModalDialog from "@/components/stores/create-modal"

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
