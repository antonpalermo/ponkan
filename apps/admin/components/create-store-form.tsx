"use client"

import { Formik, Form, FormikHelpers } from "formik"

import { Label, Input, Textarea, Button, useToast, cn } from "ui"
import { useStoreModalStore } from "@/stores/useStoreModal"

import { Store } from "database"

export interface CreateStoreFormProps {
  hidden?: boolean
}

interface StoreDetails extends Pick<Store, "name"> {
  description?: string
}

export default function CreateStoreForm({ hidden }: CreateStoreFormProps) {
  const { toast } = useToast()
  const toggle = useStoreModalStore(state => state.toggle)

  const initialFormValue: StoreDetails = {
    name: "",
    description: ""
  }

  async function handleOnSubmit(
    values: StoreDetails,
    helpers: FormikHelpers<StoreDetails>
  ) {
    const request = await fetch("/api/store", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (!request.ok) {
      // TODO: handle errors here
      const errors = await request.json()
      helpers.setErrors(errors)

      return
    }

    const result = await request.json()

    toast({
      variant: "default",
      description: result.message
    })
  }

  return (
    <Formik
      initialValues={initialFormValue}
      onSubmit={handleOnSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ values, isSubmitting, handleChange, errors, touched }) => (
        <Form className="space-y-3">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className={cn(errors.name ? "text-red-500" : "")}
            >
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              error={!!errors.name}
              placeholder="My Store"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && touched.name && (
              <p className="text-sm font-semibold text-red-500">
                {errors.name}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="store-description"
              className={cn(errors.description ? "text-red-500" : "")}
            >
              Description
            </Label>
            <Textarea
              id="description"
              error={!!errors.description}
              name="description"
              placeholder="Brief description of your store"
              onChange={handleChange}
              value={values.description}
            />
            {errors.description && touched.description && (
              <p className="text-sm font-semibold text-red-500">
                {errors.description}
              </p>
            )}
          </div>
          <div className="mt-4 inline-flex w-full items-center justify-end space-x-3">
            {!hidden && (
              <Button variant="ghost" onClick={toggle}>
                Cancel
              </Button>
            )}
            <Button type="submit" disabled={isSubmitting}>
              Create Store
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
