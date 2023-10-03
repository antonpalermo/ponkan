"use client"

import Modal from "@/components/modal"
import CreateStoreForm from "@/components/stores/create-form"

import { useStoreModalStore } from "@/stores/useStoreModal"

export default function CreateStoreModalDialog() {
  const [isOpen, toggle] = useStoreModalStore(({ isOpen, toggle }) => [
    isOpen,
    toggle
  ])

  return (
    <Modal
      title="Open new store"
      description="Create new store to start posting and manage products."
      isOpen={isOpen}
      toggle={toggle}
    >
      <CreateStoreForm />
    </Modal>
  )
}
