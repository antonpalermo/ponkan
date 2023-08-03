"use client"

import { Form, Formik } from "formik"
import { Label, Input, Button, Textarea } from "ui"

import Modal from "@/components/modal"

export default function CreateStoreModalDialog() {
  return (
    <Modal
      title="Open new store"
      description="Create new store to start posting and manage products."
      isOpen={true}
      toggle={() => {}}
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
              <Button variant="ghost">Cancel</Button>
              <Button disabled={isSubmitting}>Create Store</Button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}
