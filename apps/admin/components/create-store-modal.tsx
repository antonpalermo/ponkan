"use client"

import { Form, Formik } from "formik"
import { Label, Input, Button, Textarea } from "ui"

import Modal from "@/components/modal"
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
      <Formik initialValues={{ name: "" }} onSubmit={() => {}}>
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-2 space-y-2">
              <Label htmlFor="store-name">Name</Label>
              <Input id="store-name" type="text" placeholder="My Store" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="store-description">Description</Label>
              <Textarea
                id="store-description"
                placeholder="Brief description of your store"
              />
            </div>
            <div className="mt-4 inline-flex w-full items-center justify-end space-x-3">
              <Button variant="ghost" onClick={toggle}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                Create Store
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}
